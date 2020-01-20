import React from 'react';
import ReactMapGL, { ViewportProps, StaticMap } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import DeckGL, { RGBAColor } from 'deck.gl';
import { ScatterplotLayer } from '@deck.gl/layers';

import taxiData from 'data/taxi';

import { Container } from './styled';

const PICKUP_COLOR: RGBAColor = [0, 128, 255];
const DROPOFF_COLOR: RGBAColor = [255, 0, 128];

function renderLayers(props) {
  const { data } = props;
  return [
    new ScatterplotLayer<{ position: [number, number]; pickup: boolean }>({
      id: 'scatterplot-teste',
      getPosition: d => d.position,
      getFillColor: d => (d.pickup ? PICKUP_COLOR : DROPOFF_COLOR),
      // getLineColor: d => [0, 0, 0],
      // getColor: d => (d.pickup ? PICKUP_COLOR : DROPOFF_COLOR),
      getRadius: d => 22,
      // opacity: 0.5,
      pickable: true,
      radiusScale: 6,
      radiusMinPixels: 1,
      radiusMaxPixels: 30,
      data,
    }),
  ];
}

type Props = {};

type State = {
  viewport: Partial<ViewportProps>;
  points: Array<any>;
};

export default class extends React.Component<Props, State> {
  state = {
    viewport: {
      // latitude: -15,
      // longitude: -70,
      // zoom: 3.5,
      // longitude: -74.006,
      // latitude: 40.7128,
      // zoom: 12,
      longitude: -74,
      latitude: 40.7,
      zoom: 11,
      bearing: 0,
      pitch: 0,
    },
    points: [],
  };

  componentDidMount() {
    this._processData();
  }

  _processData() {
    const points = taxiData.reduce((accu: Array<any>, curr) => {
      accu.push({
        position: [
          Number(curr['pickup_longitude']),
          Number(curr['pickup_latitude']),
        ],
        pickup: true,
      });
      accu.push({
        position: [
          Number(curr['dropoff_longitude']),
          Number(curr['dropoff_latitude']),
        ],
        pickup: false,
      });
      return accu;
    }, []);
    this.setState({
      points,
    });
  }

  handleViewportChange = (viewport: ViewportProps) => {
    this.setState({
      viewport,
    });
  };

  render() {
    const { viewport } = this.state;
    return (
      <Container>
        <ReactMapGL
          {...viewport}
          width="100%"
          height="100%"
          mapStyle="/maptiles/styles/klokantech-basic/style.json"
          onViewportChange={this.handleViewportChange}
        >
          <DeckGL
            width="100%"
            height="100%"
            viewState={viewport}
            layers={renderLayers({ data: this.state.points })}
            // onViewportChange={this.handleViewportChange}
          ></DeckGL>
        </ReactMapGL>
        {/* <ReactMapGL
          width="100%"
          height="100%"
          mapStyle={{
            version: 8,
            sources: {
              'simple-tiles': {
                type: 'raster',
                tiles: [
                  'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png',
                  'https://b.tile.openstreetmap.org/{z}/{x}/{y}.png',
                ],
                tileSize: 256,
              },
            },
            layers: [
              {
                id: 'simple-tiles',
                type: 'raster',
                source: 'simple-tiles',
                minzoom: 0,
                maxzoom: 22,
              },
            ],
          }}
        /> */}
      </Container>
    );
  }
}

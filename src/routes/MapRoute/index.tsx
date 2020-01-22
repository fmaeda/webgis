import React from 'react';
import ReactMapGL, { ViewportProps, Source, Layer } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { ThunkActionDispatch } from 'redux-thunk';
import { inventarioThunks } from 'store/inventario';
import { connect } from 'react-redux';

import taxiData from 'data/taxi';
import { Container } from './styled';

type Props = {
  fetchInventario: ThunkActionDispatch<typeof inventarioThunks.fetchInventario>;
};

type State = {
  viewport: Partial<ViewportProps>;
  points: Array<any>;
};

class MapRoute extends React.Component<Props, State> {
  state = {
    viewport: {
      longitude: -87.622088,
      latitude: 41.878781,
      zoom: 11,
      bearing: 0,
      pitch: 0,
    },
    points: [],
  };

  componentDidMount() {
    // this._processData();
  }

  _processData() {
    const points = taxiData.reduce((accu: Array<any>, curr) => {
      accu.push({
        coord: [
          Number(curr['pickup_longitude']),
          Number(curr['pickup_latitude']),
        ],
        pickup: true,
      });
      accu.push({
        coord: [
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

  handleFetch = () => {
    const { fetchInventario } = this.props;
    console.log('fetching...');
    fetchInventario().then(points => {
      // console.log('points', points);
      console.log('finish!');
      this.setState({ points });
    });
  };

  render() {
    const { viewport } = this.state;
    return (
      <Container>
        <button onClick={this.handleFetch}>Fetch Inventario</button>
        <ReactMapGL
          width="100%"
          height="100%"
          {...viewport}
          onViewportChange={this.handleViewportChange}
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
        >
          <Source
            id="mapillary"
            type="vector"
            tiles={[
              'https://d25uarhxywzl1j.cloudfront.net/v0.1/{z}/{x}/{y}.mvt',
            ]}
          />
          <Layer
            id="mapillary"
            type="line"
            source="mapillary"
            source-layer="mapillary-sequences"
            paint={{
              'line-opacity': 0.6,
              'line-color': 'rgb(53, 175, 109)',
              'line-width': 2,
            }}
          />
        </ReactMapGL>
      </Container>
    );
  }
}

export default connect(null, {
  fetchInventario: inventarioThunks.fetchInventario,
})(MapRoute);

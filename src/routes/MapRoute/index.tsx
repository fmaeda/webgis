import React from 'react';
import ReactMapGL, { ViewportProps, Source, Layer } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { inventarioThunks } from 'store/inventario';
import { connect } from 'react-redux';

import { Container } from './styled';

type Props = {};

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
                  // eslint-disable-next-line max-len
                  // 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}.png',
                  // eslint-disable-next-line max-len
                  'https://abcd.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
                  // 'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png',
                  // 'https://b.tile.openstreetmap.org/{z}/{x}/{y}.png',
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

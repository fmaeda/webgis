import { CompositeLayer } from '@deck.gl/core';
import { CompositeLayerProps } from '@deck.gl/core/lib/composite-layer';
import { IconLayer } from '@deck.gl/layers';
import Supercluster from 'supercluster';

function getIconName(size) {
  // console.log('size', size);
  if (size === 0) {
    return '';
  }
  if (size < 10) {
    return `marker-${size}`;
  }
  if (size < 100) {
    return `marker-${Math.floor(size / 10)}0`;
  }
  return 'marker-100';
}

function getIconSize(size) {
  return Math.min(100, size) / 100 + 1;
}

type Props<D> = {
  getPosition: (e: D) => [number, number];
  iconMapping: any;
  iconAtlas: any;
  sizeScale: number;
  wrapLongitude: boolean;
};

export default class ClusterLayer<D> extends CompositeLayer<D> {
  constructor(props: CompositeLayerProps<D> & Props<D>) {
    super(props);
  }

  shouldUpdateState({ changeFlags }) {
    return changeFlags.somethingChanged;
  }

  updateState({ props, oldProps, changeFlags }) {
    const rebuildIndex =
      changeFlags.dataChanged || props.sizeScale !== oldProps.sizeScale;

    if (rebuildIndex) {
      const index = new Supercluster({ maxZoom: 20, radius: props.sizeScale });
      index.load(
        props.data.map(d => ({
          geometry: { coordinates: props.getPosition(d) },
          properties: d,
        })),
      );
      this.setState({ index });
    }
    const ctx = this.context as any;
    const z = Math.floor(ctx.viewport.zoom);
    if (rebuildIndex || z !== this.state.z) {
      this.setState({
        data: this.state.index.getClusters([-180, -85, 180, 85], z),
        z,
      });
    }
  }

  getPickingInfo({ info, mode }) {
    const pickedObject = info.object && info.object.properties;
    if (pickedObject) {
      if (pickedObject.cluster && mode !== 'hover') {
        try {
          info.objects = this.state.index
            .getLeaves(pickedObject.cluster_id, 25)
            .map(f => f.properties);
        } catch {}
      }
      info.object = pickedObject;
    }
    return info;
  }

  renderLayers() {
    const { data } = this.state;
    const { iconAtlas, iconMapping, sizeScale } = this.props;

    return new IconLayer(
      this.getSubLayerProps({
        id: 'icon',
        data,
        iconAtlas,
        iconMapping,
        sizeScale,
        getPosition: d => d.geometry.coordinates,
        getIcon: d => {
          const iconName = getIconName(
            d.properties.cluster ? d.properties.point_count : 1,
          );
          return iconName;
        },
        getSize: d =>
          getIconSize(d.properties.cluster ? d.properties.point_count : 1),
      }),
    );
  }
}

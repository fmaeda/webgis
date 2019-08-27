import initStoryshots, {
  multiSnapshotWithOptions,
} from '@storybook/addon-storyshots';
import { configure } from '@storybook/react';
import requireContext from 'require-context.macro';
import { addSerializer } from 'jest-specific-snapshot';
import { createSerializer } from 'jest-emotion';

if (process.env.NODE_ENV === 'test') {
  const req = requireContext('./components', true, /\.stories\.tsx$/);
  configure(() => req.keys().forEach(req), module);
}

addSerializer(createSerializer());

initStoryshots({
  suite: 'Storyshots',
  test: multiSnapshotWithOptions({}),
  // test: imageSnapshot({
  //   storybookUrl: 'http://localhost:9001',
  // }),
});

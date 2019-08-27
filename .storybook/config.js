import { configure } from "@storybook/react";

// addDecorator(withThemesProvider([theme]));

// import requireContext from 'require-context.macro';

// import registerRequireContextHook from 'babel-plugin-require-context-hook/register';
// registerRequireContextHook();

// const req = global.__requireContext(__dirname, '../src/components', true, /.stories.tsx$/)

// const req = require.context('../src/components', true, /.stories.tsx$/);

if (process.env.NODE_ENV !== "test") {
  const req = require.context("../src/components", true, /.stories.tsx$/);
  function loadStories() {
    req.keys().forEach(req);
  }

  configure(loadStories, module);
}

// function loadStories() {
//     req.keys().forEach(req);
// }

// configure(loadStories, module);

import { storiesOf } from '@storybook/react';
import React from 'react';
// import { withThemesProvider } from 'storybook-addon-emotion-theme';

// import { theme } from 'styles';

import Button from '.';

storiesOf('StyledButton', module)
  // .addDecorator(withThemesProvider([theme]))
  .add('with text', () => <Button onClick={() => {}} label="Button Label" />)
  .add('without text', () => <Button onClick={() => {}} />);

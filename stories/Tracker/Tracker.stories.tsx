import * as React from 'react';
import { storiesOf } from '@storybook/react';

import withTests from '../../.storybook/withTests';

import Tracker from '@components/Tracker';

const stories = storiesOf('Tracker', module)
  .addDecorator(withTests('Tracker'));

stories
.add('default', () => (<Tracker />));
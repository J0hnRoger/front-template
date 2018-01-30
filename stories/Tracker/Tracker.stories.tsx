import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

const Tracker = () => (<div><h1>Tracker</h1></div>)
const stories = storiesOf('Tracker', module);

stories
.add('default', () => (<Tracker />));
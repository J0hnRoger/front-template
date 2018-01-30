import { configure } from '@storybook/react';
import withTests from './withTests'

// Redux Provider
// import Provider from './providers';

// addDecorator((story) => (
//   <Provider story={story()} />
// ));

// automatically import all files ending in *.stories.tsx
const req = require.context('../stories', true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);

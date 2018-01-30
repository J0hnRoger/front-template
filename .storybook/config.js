import { configure } from '@storybook/react';

/** Enzyme - Configuration pour compatibilité avec react 15 */
import { configure as enzymeConfigure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
enzymeConfigure({ adapter: new Adapter() });

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

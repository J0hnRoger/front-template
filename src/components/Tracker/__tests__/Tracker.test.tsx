import * as React from 'react';
import { shallow } from 'enzyme';

import Tracker from '../';

/**
  * Tests List
  *
  */
const setup = (propOverrides) => {
   const props = Object.assign({
   }, propOverrides);

   const wrapper = shallow(<Tracker {...props} />);

   return {
      props,
      wrapper,
   };
};

describe('Tracker', () => {
  const { wrapper } = setup({});
  test('Tracker s\'affiche correctement', () => {
    expect(wrapper).toMatchSnapshot();
   });
})

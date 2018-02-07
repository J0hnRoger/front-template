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
      clear: wrapper.find('.clear-completed'),
      count: wrapper.find('.todo-count'),
   };
};

describe('Tracker', () => {
   test('Tracker s\'affiche correctement', () => {
      const result = setup({})
        expect(result.wrapper).toMatchSnapshot();
   });
})

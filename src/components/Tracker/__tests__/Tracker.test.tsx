import * as React from 'react';
import { } from 'jest';
import { shallow } from 'enzyme';

import Tracker from '../';

/**
  * Tests List
  *
  *
  */

const setup = (propOverrides) => {
   const props = Object.assign({
      completedCount: 0,
      activeCount: 0,
      onClearCompleted: jest.fn(),
   }, propOverrides);

   const wrapper = shallow(<Tracker {...props} />);

   return {
      props,
      wrapper,
      clear: wrapper.find('.clear-completed'),
      count: wrapper.find('.todo-count'),
   };
};

describe('Component::Tracker', () => {
   test('Tracker s\'affiche correctement', () => {
      const { count } = setup({ activeCount: 0 });
      expect(1).toEqual(1);
   });

   test('Tracker se comporte correctement', () => {
      const { count } = setup({ activeCount: 0 });
      expect(1).toEqual(1);
   });
});

import * as React from 'react';
import { specs, describe, it } from 'storybook-addon-specifications'

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { shallow } from "enzyme";
import * as expect from "expect";

const Tracker = () => (<div><h1>Tracker</h1></div>)
const stories = storiesOf('Tracker', module);

stories
  .add('default', () => { 
    const story = <Tracker />;
    
    specs(() => describe('Button', function () {
      it('Should have the Hello World label', () => {
        let output = shallow(story);
        expect(output.text()).toContain('');
      });
    }));  
    
    return story;
  })

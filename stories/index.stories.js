import React from 'react';
import { specs, describe, it } from 'storybook-addon-specifications'

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import {mount} from "enzyme";
import expect from "expect";

import { Button, Welcome } from '@storybook/react/demo';

const stories = storiesOf('Button', module);

storiesOf('Button', module)
  .add('with text', () => { 
    const story = <Button onClick={action('clicked')}>Hello Button</Button>;
    
    specs(() => describe('Button', function () {
      it('Should have the Hello World label', function () {
        let output = mount(story);
        expect(output.text()).toContain('Hello World');
      });
    }));  
    
    return story;
  })
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

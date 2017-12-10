import * as React from 'react';
import * as renderer from 'react-test-renderer';
import RaceDetails from './RaceDetails';
import {
    BrowserRouter as Router
  } from 'react-router-dom';
  
test('<RaceDetails> renders OK', () => {
  const component = renderer.create(<Router><RaceDetails competitors={[]} name="name" /></Router>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
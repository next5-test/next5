import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Next5 from './Next5';

test('<Next5> renders OK', () => {
  const component = renderer.create(<Next5 races={[]} time={new Date().getTime()} onClick={() => null} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
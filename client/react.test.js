import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { configure, shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';
import Review from './components/Review.jsx';

configure({ adapter: new Adapter() });

describe('First React component test with Enzyme', () => {
  it('renders without crashing', () => {
     shallow(<Review />);
   });
});
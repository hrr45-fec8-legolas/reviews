import React from 'react';
import ReactDOM from "react-dom";
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { configure, shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';
import Review from '../client/components/Review.jsx';
import App from '../client/index.jsx';

configure({ adapter: new Adapter() });

describe('First React component test with Enzyme', () => {
  it('renders without crashing', () => {
     shallow(<Review />);
   });
});

it('renders without crashing', () => {
  shallow(<App />);
});





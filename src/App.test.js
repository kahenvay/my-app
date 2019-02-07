import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configure } from 'enzyme';
import { mount } from 'enzyme';
import toJson from "enzyme-to-json";
import Adapter from 'enzyme-adapter-react-16';
import EventImage from './components/EventImage/EventImage';
configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

/*it("should render the homepage and the events", () => {
  const props = {
    events: [],
    isLoading: true,
    errors: null
  }
  const app = mount(<App {...props} />)
  expect(toJson(app)).toMatchSnapshot()
})*/

it('render correctly EventImage component', () => {  
  const EventImageComponent = renderer.create(<EventImage />).toJSON();
  expect(EventImageComponent).toMatchSnapshot();
});
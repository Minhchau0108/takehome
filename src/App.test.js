import App from './App';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new EnzymeAdapter() });

const wrapper = shallow(<App />);
test('app renders without error', () => {
  expect(wrapper.find(`[data-test="app"]`).length).toBe(1);
});
test('top sale list renders without error', () => {
  expect(wrapper.find(`[data-test="list"]`).length).toBe(1);
});

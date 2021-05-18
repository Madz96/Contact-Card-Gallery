import { shallow } from 'enzyme';
import { findByTestAttr } from './utils'
import App from './App';

const renderComponent = (props = {}) => {
  return shallow(<App />);
}

describe('App component', () => {
  let component;

  beforeEach(() => {
    component = renderComponent();
  });

  it('Should render without error', () => {
    const wrapper = findByTestAttr(component, 'app-component');
    expect(wrapper.length).toBe(1);
  });
})
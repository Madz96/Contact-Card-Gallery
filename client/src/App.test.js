import { shallow } from 'enzyme';
import { findByTestAttr } from './utils'
import App from './App';

const renderApp = (props = {}) => {
  return shallow(<App />);
}

describe('App component', () => {
  let app;

  beforeEach(() => {
    app = renderApp();
  });

  it('Should render without error', () => {
    const wrapper = findByTestAttr(app, 'app-component');
    expect(wrapper.length).toBe(1);
  });
})
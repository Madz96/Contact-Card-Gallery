import './App.css';
import { ContactPage } from './components/ContactPage/index';

function App() {
  return (
    <div test-attr="app-component" className="App">
      <h1>Simple Contact Card Gallery</h1>
      <ContactPage />
    </div>
  );
}

export default App;

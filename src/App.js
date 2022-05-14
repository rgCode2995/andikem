import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/mainpage/Home'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Home />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

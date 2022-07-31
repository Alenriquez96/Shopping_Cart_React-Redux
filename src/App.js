import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Main/>
      </BrowserRouter>
    </div>
  );
}

export default App;

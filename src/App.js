import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Contato from './components/Contato';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/contato" element={ <Contato /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

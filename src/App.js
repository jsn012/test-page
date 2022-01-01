import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Game from './components/Game';

function App() {
  return (
    <div className="App">
      <div className="App-mobile">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} /> 
          <Route path="/game/*" element={<Game />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;

import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Game from './components/Game';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/test-page" element={<Main />} /> 
        <Route path="/test-page/game/*" element={<Game />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

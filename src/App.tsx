import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GamePage from './pages/Game';
import HomePage from './pages/Home';
import ResultPage from './pages/Result';
import HelpPage from './pages/Help';
import MainContainer from './components/MainContainer';

function App() {
  
  return (
    <div className='flex flex-col justify-center mx-auto w-screen h-screen'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/game' element={<GamePage />} />
        <Route path='/result' element={<ResultPage />} />
        <Route path='/help' element={<HelpPage />} />        
      </Routes>
    </div>
  );
}

export default App;

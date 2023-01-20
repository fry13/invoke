import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import GamePage from "./pages/Game";
import HomePage from "./pages/Home";
import ResultPage from "./pages/Result";
import HelpPage from "./pages/Help";
import AboutPage from "./pages/About";
import MainContainer from "./components/MainContainer";

function App() {
  const localBest = localStorage.getItem("bestScore");
  const [bestScore, setBestScore] = useState<number>(
    localBest ? parseInt(localBest) : 0
  );
  const [currentScore, setCurrentScore] = useState<number>(0);

  const setCurrentResult = (score: number) => {
    setCurrentScore(score);
  };
  const setBestResult = (score: number) => {
    setBestScore(score);
  };

  return (
    <div className="flex flex-col justify-center mx-auto w-screen h-screen bg-slate-50 dark:bg-slate-800 transition-colors">
      <MainContainer>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/game"
            element={
              <GamePage
                setCurrentScore={setCurrentResult}
                setBestScore={setBestResult}
                bestScore={bestScore}
              />
            }
          />
          <Route
            path="/result"
            element={<ResultPage score={currentScore} bestScore={bestScore} />}
          />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </MainContainer>
    </div>
  );
}

export default App;

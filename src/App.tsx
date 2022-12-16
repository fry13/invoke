import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import GamePage from "./pages/Game";
import HomePage from "./pages/Home";
import ResultPage from "./pages/Result";
import HelpPage from "./pages/Help";
import MainContainer from "./components/MainContainer";

function App() {
  const localBest = localStorage.getItem("bestScore");
  const [bestScore, setBestScore] = useState<number>(localBest ? parseInt(localBest) : 0);
  const [currentScore, setCurrentScore] = useState<number>(0);

  const setCurrentResult = (score: number) => {
    setCurrentScore(score);
  };
  const setBestResult = (score: number) => {
    setBestScore(score);
  };

  return (
    <div className="flex flex-col justify-center mx-auto w-screen h-screen">
      <Routes>
        <Route path="/" element={<MainContainer Children={<HomePage />} />} />
        <Route
          path="/game"
          element={
            <MainContainer
              Children={
                <GamePage
                  setCurrentScore={setCurrentResult}
                  setBestScore={setBestResult}
                  bestScore={bestScore}
                />
              }
            />
          }
        />
        <Route
          path="/result"
          element={
            <MainContainer
              Children={
                <ResultPage score={currentScore} bestScore={bestScore} />
              }
            />
          }
        />
        <Route path="/help" element={<HelpPage />} />
      </Routes>
    </div>
  );
}

export default App;

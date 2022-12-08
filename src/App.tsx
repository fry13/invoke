import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import GamePage from "./pages/Game";
import HomePage from "./pages/Home";
import ResultPage from "./pages/Result";
import HelpPage from "./pages/Help";

function App() {
  const [bestScore, setBestScore] = useState(0);
  const BestScoreContext = React.createContext(bestScore);

  return (
    <div className="flex flex-col justify-center mx-auto w-screen h-screen">
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <BestScoreContext.Provider value={this.state.theme}> */}
        <Route path="/game" element={<GamePage />} />
        <Route path="/result" element={<ResultPage />} />
        {/* </BestScoreContext.Provider> */}
        <Route path="/help" element={<HelpPage />} />
      </Routes>
    </div>
  );
}

export default App;

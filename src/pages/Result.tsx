import React from "react";
import Navigation from "../components/Navigation";
import { rarity } from "../utils";

interface ScoreProps {
  score: number;
  bestScore: number;
}

export default function ResultPage({ score, bestScore }: ScoreProps) {
  return (
    <>
      <Navigation exit={true} />
      <div className="flex items-center justify-around relative">
        <p className="w-full">
          Your Current score:
          <br />
          <span className={`font-bold text-3xl ${rarity(score)}`}>{score}</span>
        </p>
        <p className="w-full">
          Your Best score:
          <br />
          <span className={`font-bold text-3xl ${rarity(bestScore)}`}>
            {bestScore}
          </span>
        </p>
      </div>
    </>
  );
}

import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/Button";
import { rarity } from "../utils";

const xmark = <FontAwesomeIcon icon={faXmark} />;

interface Scores {
  score: number;
  bestScore: number;
}

export default function ResultPage({ score, bestScore }: Scores) {
  const navigate = useNavigate();
  const routeChange = (path: string) => {
    navigate(path);
  };

  return (
    <div className="flex items-center justify-around h-full relative">
      <Button
        classes="w-7 h-7 p-1 rounded-full text-xs mb-10 absolute top-0 right-0"
        text={xmark}
        onClick={() => routeChange("/")}
      />
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
  );
}

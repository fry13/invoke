import React, { useEffect, useState } from "react";
import Icon from "../components/Icon";
import { spells } from "../spells";
import { useTimer } from "react-timer-hook";
import Button from "../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const xmark = <FontAwesomeIcon icon={faXmark} />;
const restart = <FontAwesomeIcon icon={faRotateLeft} />;

export default function GamePage(props: any) {
  const navigate = useNavigate();
  const routeChange = (path: string) => {
    navigate(path);
  };

  const [value, setValue] = useState("");

  const keyDownHandler = (event: any) => {
    const key = event.keyCode;
    if (key === 81 || key === 87 || key === 69) {
      handler(key);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", keyDownHandler, true);
    return () => document.removeEventListener("keydown", keyDownHandler, true);
  });

  const handler = (key: number) => {
    let keyName;
    if (key === 81) keyName = "q";
    else if (key === 87) keyName = "w";
    else if (key === 69) keyName = "e";
    setValue(value + keyName);
    if (value.length === 3) {
      setValue(value.slice(1) + keyName);
    }
  };

  //задаем квест оглядываясь на предыдущий
  const randomNumber = () => Math.floor(Math.random() * 10);
  const [currentQuest, setCurrentQuest] = useState(randomNumber());

  function createNextQuest(prevQuest: number) {
    let quest: number = randomNumber();
    if (quest === prevQuest) {
      while (quest === prevQuest) {
        quest = randomNumber();
      }
    }
    return quest;
  }

  //работа с таймером
  const time = new Date();
  time.setSeconds(time.getSeconds() + 15);
  function useCountdown(expiryTimestamp: any) {
    const {
      seconds,
      //isRunning,
      start,
      pause,
      //resume,
      restart,
    } = useTimer({
      expiryTimestamp,
      onExpire: () => {
        pause();
        endGameHandler();
      },
    });

    const incTimer = () => {
      time.setSeconds(time.getSeconds());
      time.setSeconds(new Date().getSeconds() + seconds + 1);
      restart(time);
    };
    return { seconds, incTimer, start, pause, restart };
  }
  const timerProps = useCountdown(time);

  //проверяем выполнен ли квест, прибавляем таймер, выводим очки
  const [score, setScore] = useState(0);
  if (spells[currentQuest].buttons.includes(value)) {
    setScore(score + 1);
    timerProps.incTimer();
    setCurrentQuest(createNextQuest(currentQuest));
  }

  //в конце игры
  const endGameHandler = () => {
    const best = props.bestScore || 0;
    props.setCurrentScore(score);
    if (score > parseInt(best)) {
      props.setBestScore(score);
      localStorage.setItem("bestScore", score.toString());
    }
    navigate("/result");
  };

  function restartGame() {
    time.setSeconds(new Date().getSeconds() + 15);
    timerProps.restart(time);
    setScore(0);
    setCurrentQuest(createNextQuest(currentQuest));
    setValue("");
  }

  return (
    // <div className="w-1/3 mx-auto text-center bg-gradient-to-t from-slate-50 to-slate-100 rounded p-2 pb-8 shadow-xl">
    <>
      <div className="flex justify-end mb-2">
        <Button
          classes="w-10 h-10 p-1 rounded-full text-xl mb-10 mr-2"
          text={restart}
          onClick={restartGame}
        />
        <Button
          classes="w-10 h-10 p-1 rounded-full text-xl mb-10"
          text={xmark}
          onClick={() => routeChange("/")}
        />
      </div>
      <Icon spell={spells[currentQuest]} />
      <p className="mx-auto font-bold mt-4">{value || " "}</p>
      <div className="mt-4">
        <span className="mr-8">
          Score: <span className="font-bold">{score}</span>
        </span>
        <span>
          Time:{" "}
          <span
            className={`font-bold ${
              timerProps.seconds <= 5 ? "text-red-500/75" : "text-slate-500/75"
            }`}
          >
            {timerProps.seconds}
          </span>
        </span>
      </div>
    </>
    // </div>
  );
}

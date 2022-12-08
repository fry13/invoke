import React, { useEffect, useRef, useState } from "react";
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

export default function GamePage() {
  const navigate = useNavigate();
  const routeChange = (path: string) => {
    navigate(path);
  };

  //работа с инпутом
  const [value, setValue] = useState("");

  const keyDownHandler = (event: any) => {
    const keyName = event.key;
    if (
      keyName.toLowerCase() === "q" ||
      keyName.toLowerCase() === "w" ||
      keyName.toLowerCase() === "e"
    ) {
      handler(keyName);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", keyDownHandler, true);
    return () => document.removeEventListener("keydown", keyDownHandler, true);
  });

  const handler = (keyName: string) => {
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
  const [isDisabled, setIsDisabled] = useState(false);
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
        //alert(score);
        //setScore(0);
        navigate("/result");
        pause();
        setIsDisabled(true);
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

  function restartGame() {
    time.setSeconds(new Date().getSeconds() + 15);
    timerProps.restart(time);
    setScore(0);
    setCurrentQuest(createNextQuest(currentQuest));
    setValue("");
    setIsDisabled(false);
  }

  //поддержка фокуса на инпуте
  function keepFocus(element: any) {
    if (element.current !== null) {
      element.current.focus();
    }
  }

  return (
    <div className="w-1/3 mx-auto text-center bg-gradient-to-t from-slate-50 to-slate-100 rounded p-2 pb-8 shadow-xl">
      <div className="flex justify-end mb-2">
        <Button
          classes="w-10 h-10 p-1 text-base rounded-full text-xl mb-10 mr-2"
          text={restart}
          onClick={restartGame}
        />
        <Button
          classes="w-10 h-10 p-1 text-base rounded-full text-xl mb-10"
          text={xmark}
          onClick={() => routeChange("/")}
        />
      </div>
      <Icon spell={spells[currentQuest]} />
      <p className="mx-auto">Score: {score}</p>
      <p className="mx-auto">Timer: {timerProps.seconds}</p>
      <p className="mx-auto font-bold">{value}</p>      
    </div>
  );
}

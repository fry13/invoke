import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTimer } from "react-timer-hook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import Icon from "../components/Spell";
import Button from "../components/Button";
import { spells } from "../spells";
import { orbs } from "../orbs";
import Orb from "../components/Orb";

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

  //задаем квест оглядываясь на предыдущие
  const randomNumber = () => Math.floor(Math.random() * 10);
  const [currentQuest, setCurrentQuest] = useState(randomNumber());
  const [prevQuests, setPrevQuests] = useState<Number[]>([currentQuest]);

  function createNextQuest(questsArray: Number[]) {
    let quest: number = randomNumber();
    if (questsArray.includes(quest)) {
      while (questsArray.includes(quest)) {
        quest = randomNumber();
      }
    }
    if (prevQuests.length === 4) {
      prevQuests.shift();
    }
    setPrevQuests([...prevQuests, quest]);
    return quest;
  }

  //работа с таймером
  function useCountdown(expiryTimestamp: any) {
    const { seconds, start, pause, restart } = useTimer({
      expiryTimestamp,
      onExpire: () => {
        pause();
        endGameHandler();
      },
    });

    const incTimer = () => {
      if (seconds === 10) return;
      let time = new Date();
      time.setSeconds(time.getSeconds() + seconds + 1);
      restart(time);
    };
    return { seconds, incTimer, start, restart };
  }

  let time: Date = new Date();
  time.setSeconds(time.getSeconds() + 5);
  const timerProps = useCountdown(time);

  //проверяем выполнен ли квест, прибавляем таймер, выводим очки
  const [score, setScore] = useState<number>(0);
  if (spells[currentQuest].buttons.includes(value)) {
    setScore(score + 1);
    timerProps.incTimer();
    setCurrentQuest(createNextQuest(prevQuests));
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
    let time = new Date();
    time.setSeconds(time.getSeconds() + 5);
    timerProps.restart(time);
    setScore(0);
    setCurrentQuest(createNextQuest(prevQuests));
    setValue("");
  }

  return (
    <>
      <div className="flex justify-end mb-2">
        <Button
          classes="w-7 h-7 p-1 rounded-full text-xs mb-10 mr-2"
          text={restart}
          onClick={restartGame}
        />
        <Button
          classes="w-7 h-7 p-1 rounded-full text-xs mb-10"
          text={xmark}
          onClick={() => routeChange("/")}
        />
      </div>
      <Icon spell={spells[currentQuest]} />
      <div className="flex w-max mx-auto">
        <Orb button={value[0]} />
        <Orb button={value[1]} />
        <Orb button={value[2]} />
      </div>
      {/* <p className="mx-auto font-bold mt-2">{value || " "}</p> */}
      <div className="mt-2">
        <span className="mr-8">
          Score: <span className="font-bold">{score}</span>
        </span>
        Time:{" "}
        <span
          className={`font-bold ${
            timerProps.seconds <= 3 ? "text-red-700" : "text-slate-800"
          }`}
        >
          {timerProps.seconds}
        </span>
      </div>
    </>
  );
}


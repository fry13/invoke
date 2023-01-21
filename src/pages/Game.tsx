import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTimer } from "react-timer-hook";
import Spell from "../components/Spell";
import Orb from "../components/Orb";
import { rarity } from "../utils/utils";
import { spells } from "../data/spells";
import Navigation from "../components/Navigation";
import ActionPanel from "../components/ActionPanel";

interface GameProps {
  bestScore: number;
  setBestScore: Function;
  setCurrentScore: Function;
}

export default function GamePage({
  bestScore,
  setBestScore,
  setCurrentScore,
}: GameProps) {
  const navigate = useNavigate();

  // предзагружаем изображения заклинаний
  useEffect(() => {
    spells.forEach((spell) => {
      new Image().src = spell.image;
    });
  }, []);

  // слушаем нажатие клавиш, нужные записываем в value из которого в последствии рисуем сферы
  const [value, setValue] = useState("");

  const keyDownHandler = (event: KeyboardEvent) => {
    const key = event.keyCode;
    if (key === 81 || key === 87 || key === 69) {
      keyboardHandler(key);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", keyDownHandler, true);
    return () => document.removeEventListener("keydown", keyDownHandler, true);
  });

  const keyboardHandler = (key: number) => {
    let keyName;
    if (key === 81) keyName = "q";
    else if (key === 87) keyName = "w";
    else if (key === 69) keyName = "e";
    setValue(value + keyName);
    if (value.length === 3) {
      setValue(value.slice(1) + keyName);
    }
  };

  const actionPanelHandler = (keyName: string) => {
    console.log(keyName);
    setValue(value + keyName);
    if (value.length === 3) {
      setValue(value.slice(1) + keyName);
    }
  };

  // задаем квест оглядываясь на предыдущие
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

  // работа с таймером
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

  // работа с прогрессбаром
  const [maxSeconds, setMaxSeconds] = useState<number>(5);
  if (timerProps.seconds > maxSeconds) setMaxSeconds(timerProps.seconds);
  let progressBarValue = ((timerProps.seconds - 1) / (maxSeconds - 1)) * 100;

  // проверяем выполнен ли квест, прибавляем таймер, выводим очки
  const [score, setScore] = useState<number>(0);
  if (spells[currentQuest].buttons.includes(value)) {
    setScore(score + 1);
    timerProps.incTimer();
    setCurrentQuest(createNextQuest(prevQuests));
  }

  // в конце игры
  const endGameHandler = () => {
    const best = bestScore || 0;
    setCurrentScore(score);
    if (score > best) {
      setBestScore(score);
      localStorage.setItem("bestScore", score.toString());
    }
    navigate("/result");
  };

  // рестарт игры
  function restartGame() {
    let time = new Date();
    time.setSeconds(time.getSeconds() + 5);
    setMaxSeconds(5);
    timerProps.restart(time);
    setScore(0);
    setCurrentQuest(createNextQuest(prevQuests));
    setValue("");
  }

  return (
    <>
      <Navigation restart={true} exit={true} restartHandler={restartGame} />
      <Spell imgClasses="animate-spellSlide" spell={spells[currentQuest]} />
      <div className="flex justify-center w-full mx-auto mt-5">
        <Orb
          key={value + "1"}
          classes={`mx-1 ${value.length > 2 ? "animate-leftOrbSlide" : ""}`}
          button={value[0]}
        />
        <Orb classes="mx-1" button={value[1]} />
        <Orb
          key={value}
          classes="mx-1 animate-rightOrbSlide"
          button={value[2]}
        />
      </div>
      {/* <p className="mx-auto font-bold mt-2">{value || " "}</p> */}
      <div className="mt-5">
        <span className="mr-8">
          Score:{" "}
          <span className={`font-bold transition-colors ${rarity(score)}`}>
            {score}
          </span>
        </span>
        Time:{" "}
        <span
          className={`font-bold transition-colors ${
            timerProps.seconds <= 3 ? "text-red-700" : ""
          }`}
        >
          {timerProps.seconds}
        </span>
      </div>
      <div className="w-full h-2 absolute bottom-0 -ml-2">
        <div
          className="bg-slate-800 dark:bg-slate-500 h-2 transition-all ease-linear duration-1000"
          style={{ width: progressBarValue + "%" }}
        ></div>
      </div>
      <ActionPanel handler={actionPanelHandler} />
    </>
  );
}

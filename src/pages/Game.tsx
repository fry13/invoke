import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTimer } from "react-timer-hook";
import Spell from "../components/Spell";
import Orb from "../components/Orb";
import { rarity } from "../utils";
import { spells } from "../spells";
import Navigation from "../components/Navigation";

export default function GamePage(props: any) {
  const navigate = useNavigate();

  // предзагружаем изображения заклинаний
  useEffect(() => {
    spells.forEach((spell) => {
      new Image().src = spell.image;
    });
  });

  // слушаем нажатие клавиш, нужные записываем в value из которого в последствии рисуем сферы
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
  let progressBarValue = (timerProps.seconds / maxSeconds) * 100;

  // проверяем выполнен ли квест, прибавляем таймер, выводим очки
  const [score, setScore] = useState<number>(0);
  if (spells[currentQuest].buttons.includes(value)) {
    setScore(score + 1);
    timerProps.incTimer();
    setCurrentQuest(createNextQuest(prevQuests));
  }

  // в конце игры
  const endGameHandler = () => {
    const best = props.bestScore || 0;
    props.setCurrentScore(score);
    if (score > parseInt(best)) {
      props.setBestScore(score);
      localStorage.setItem("bestScore", score.toString());
    }
    navigate("/result");
  };

  // рестарт игры
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
      <Navigation restart={true} exit={true} restartHandler={restartGame} />
      <Spell spell={spells[currentQuest]} />
      <div className="flex w-max mx-auto mt-5">
        <Orb button={value[0]} />
        <Orb button={value[1]} />
        <Orb button={value[2]} />
      </div>
      {/* <p className="mx-auto font-bold mt-2">{value || " "}</p> */}
      <div className="mt-5">
        <span className="mr-8">
          Score: <span className={`font-bold ${rarity(score)}`}>{score}</span>
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
      <div className="w-full h-2 absolute bottom-0 -ml-2">
        <div
          className="bg-slate-800 h-2"
          style={{ width: progressBarValue + "%" }}
        ></div>
      </div>
    </>
  );
}

//todo сделать faq страницу
//todo поменять роутинг
// ? keybindings

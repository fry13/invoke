import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/Button";

const xmark = <FontAwesomeIcon icon={faXmark} />;

export default function ResultPage(props: any) {
  const navigate = useNavigate();
  const routeChange = (path: string) => {
    navigate(path);
  };
  return (
    <div className="flex flex-col justify-center h-full relative">
      <Button
        classes="w-7 h-7 p-1 rounded-full text-xs mb-10 absolute top-0 right-0"
        text={xmark}
        onClick={() => routeChange("/")}
      />
      <p>
        Your Current score: <span className="font-bold">{props.score}</span>
      </p>
      <p>
        Your Best score: <span className="font-bold">{props.bestScore}</span>
      </p>
    </div>
  );
}

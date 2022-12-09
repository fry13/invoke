import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const xmark = <FontAwesomeIcon icon={faXmark} />;

export default function ResultPage(props: any) {
  const navigate = useNavigate();
  const routeChange = (path: string) => {
    navigate(path);
  };
  return (
    <div className="flex flex-col justify-center h-full relative">
      <Button
        classes="w-10 h-10 p-1 rounded-full text-xl mb-10 absolute top-0 right-0"
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

import React from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const question = <FontAwesomeIcon icon={faQuestion} />;
const xmark = <FontAwesomeIcon icon={faXmark} />;
const rotate = <FontAwesomeIcon icon={faRotateLeft} />;

interface NavProps {
  help?: boolean;
  restart?: boolean;
  exit?: boolean;
  restartHandler?: any;
}

export default function Navigation({
  help,
  restart,
  exit,
  restartHandler,
}: NavProps) {
  const navigate = useNavigate();
  return (
    <div className="flex justify-end mb-2 absolute top-1 right-1">
      <Button
        classes={`w-7 h-7 p-1 m-1 rounded-full text-xs ${
          help ? "inline-block" : "hidden"
        }`}
        text={question}
        onClick={() => navigate("/help")}
      />
      <Button
        classes={`w-7 h-7 p-1 m-1 rounded-full text-xs ${
          restart ? "inline-block" : "hidden"
        }`}
        text={rotate}
        onClick={restartHandler}
      />
      <Button
        classes={`w-7 h-7 p-1 m-1 rounded-full text-xs ${
          exit ? "inline-block" : "hidden"
        }`}
        text={xmark}
        onClick={() => navigate("/")}
      />
    </div>
  );
}

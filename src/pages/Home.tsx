import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePopper } from "react-popper";
import Button from "../components/Button";
import invoke from "../images/invoke.png";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";

const question = <FontAwesomeIcon icon={faQuestion} />;

export default function HomePage() {
  const navigate = useNavigate();
  const routeChange = (path: string) => {
    navigate(path);
  };

  return (
    <div className="flex flex-col justify-center h-full relative">
      <Button
        classes="w-7 h-7 p-1 rounded-full text-xs mb-10 absolute top-0 right-0"
        text={question}
      />
      <img
        className="mx-auto rounded border border-slate-800"
        src={invoke}
        alt="Invoke"
      />
      <Button
        classes="mx-auto mt-10 w-24 p-1 rounded text-xl"
        text="Start"
        onClick={() => routeChange("/game")}
      />
    </div>
  );
}

import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import invoke from "../images/invoke.png";

export default function HomePage() {
  const navigate = useNavigate();
  const routeChange = (path: string) => {
    //const path = `/game`;
    navigate(path);
  };

  return (
    <div className="flex flex-col justify-center h-full">
      <img
        className="mx-auto rounded p-0.5 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"
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

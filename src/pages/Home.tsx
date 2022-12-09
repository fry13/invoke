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
    <>
      <img
        className="mx-auto rounded border-2 border-slate-500/50"
        src={invoke}
        alt="Invoke"
      />
      <Button
        classes="mx-auto mt-10 w-24 p-1 rounded text-xl"
        text="Start"
        onClick={() => routeChange("/game")}
      />
    </>
  );
}

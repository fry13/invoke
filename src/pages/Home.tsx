import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import invoke from "../images/invoke.png";
import Navigation from "../components/Navigation";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <Navigation help={true} />
      {/* <div className="justify-self-center"> */}
      <img
        className="mx-auto rounded border border-slate-800"
        src={invoke}
        alt="Invoke"
      />
      <Button
        classes="mx-auto w-24 mt-10 p-1 rounded text-xl"
        text="Start"
        onClick={() => navigate("/game")}
      />
      {/* </div> */}
    </>
  );
}

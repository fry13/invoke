import React from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import Button from "../components/Button";

export default function AboutPage() {
  const navigate = useNavigate();
  return (
    <>
      <Navigation exit={true} darkMode={true} />
      <p className="text-xl">Hi!</p>
      <p>
        This app will help you memorize invoker spell combinations from the
        computer game Dota2. Controls are done with the "
        <span className="font-bold">Q</span>", "
        <span className="font-bold">W</span>", "
        <span className="font-bold">E</span>" buttons. On mobile devices there
        is a control panel.
      </p>
      <Button
        classes="mx-auto w-24 mt-10 p-1 rounded"
        text="Got it!"
        onClick={() => navigate("/")}
      />
    </>
  );
}

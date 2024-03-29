import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import invoke from "../images/invoke.png";
import Navigation from "../components/Navigation";

export default function HomePage() {
  const navigate = useNavigate();
  const localAboutReaded = localStorage.getItem("about");
  const [aboutReaded, setAboutReaded] = useState<boolean>(
    localAboutReaded ? true : false
  );
  useEffect(() => {
    if (aboutReaded === false) {
      localStorage.setItem("about", "true");
      navigate("/about");
    }
  });
  return (
    <>
      <Navigation github={true} help={true} darkMode={true} />
      <img
        className="mx-auto w-20 rounded border border-slate-800 dark:border-slate-500"
        src={invoke}
        alt="Invoke"
      />
      <Button
        classes="mx-auto w-24 mt-10 p-1 rounded text-xl"
        text="Start"
        onClick={() => navigate("/game")}
      />
    </>
  );
}

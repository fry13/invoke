import React from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useDarkMode } from "../hooks/useDarkMode";

const question = <FontAwesomeIcon icon={faQuestion} />;
const xmark = <FontAwesomeIcon icon={faXmark} />;
const rotate = <FontAwesomeIcon icon={faRotateLeft} />;
const moon = <FontAwesomeIcon icon={faMoon} />;
interface NavProps {
  github?: Boolean;
  help?: Boolean;
  restart?: Boolean;
  exit?: Boolean;
  darkMode?: Boolean;
  restartHandler?: Function;
}

export default function Navigation({
  github,
  help,
  restart,
  exit,
  darkMode,
  restartHandler,
}: NavProps) {
  const navigate = useNavigate();
  const [isDark, setIsDark] = useDarkMode();
  function toggleDarkHandler() {
    isDark ? setIsDark(false) : setIsDark(true);
  }
  return (
    <div className="flex justify-end absolute top-1 right-1">
      <a href="https://github.com/fry13/invoke">
        <Button
          classes={`w-7 h-7 p-1 m-1 rounded-full text-xs dark:text-slate-100  ${
            github ? "inline-block" : "hidden"
          }`}
          text={
            <svg viewBox="0 0 150 150" className="w-7 h-7 fill-current">
              <path d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" />
            </svg>
          }
        />
      </a>
      <Button
        classes={`w-7 h-7 p-1 m-1 rounded-full text-xs ${
          darkMode ? "inline-block" : "hidden"
        }`}
        text={moon}
        onClick={() => toggleDarkHandler()}
      />
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

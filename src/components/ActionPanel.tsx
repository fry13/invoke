import React from "react";
import Button from "./Button";
import { orbs } from "../data/orbs";

interface ActionProps {
  handler: Function;
}

export default function ActionPanel({ handler }: ActionProps) {
  return (
    <div className="hidden max-lg:flex absolute -bottom-[90px] -ml-2 transition-colors w-full justify-between mx-auto text-center rounded p-2 shadow-lg border bg-slate-100 dark:bg-slate-900 border-slate-800 dark:border-slate-500 text-slate-800 dark:text-slate-100 ">
      <Button
        classes="w-[60px] h-[60px] rounded"
        onClick={() => handler("q")}
        text={
          <img className="rounded" src={orbs[0].image} alt={orbs[0].name} />
        }
      />
      <Button
        classes="w-[60px] h-[60px] rounded"
        onClick={() => handler("w")}
        text={
          <img className="rounded" src={orbs[1].image} alt={orbs[1].name} />
        }
      />
      <Button
        classes="w-[60px] h-[60px] rounded"
        onClick={() => handler("e")}
        text={
          <img className="rounded" src={orbs[2].image} alt={orbs[2].name} />
        }
      />
    </div>
  );
}

import React from "react";
import { orbs } from "../data/orbs";

interface ButtonProps {
  button: string;
  classes?: string;
}

export default function Orb({ button, classes }: ButtonProps) {
  let newOrb;
  if (button) {
    newOrb = orbs.filter(function (orb) {
      return orb.button === button;
    })[0];
  } else newOrb = orbs[2];
  return (
    <>
      <img
        className={`h-12 rounded-full border border-slate-800 transition-all ${classes} ${
          button ? "visible" : "invisible"
        }`}
        src={newOrb.image}
        alt={newOrb.name}
      />
    </>
  );
}

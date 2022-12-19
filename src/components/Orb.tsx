import React from "react";
import { orbs } from "../orbs";

export default function Orb({ button }: any) {
  let newOrb;
  if (button) {
    newOrb = orbs.filter(function (orb) {
      return orb.button === button;
    })[0];
  } else newOrb = orbs[2];
  return (
    <>
      <img
        className={`mr-1 h-12 rounded-full border border-slate-800 transition-all ${
          button ? "visible" : "invisible"
        }`}
        src={newOrb.image}
        alt={newOrb.name}
      />
    </>
  );
}

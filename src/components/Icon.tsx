import React from "react";
import { ISpell } from "../models";

interface SpellProps {
  spell: ISpell;
}

export default function Icon({ spell }: SpellProps) {
  return (
    <div className="w-max h-max mx-auto">
      <img
        className="mx-auto rounded p-0.5 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"
        src={spell.image}
        alt={spell.name}
      />
      <p className="mx-auto text-center">{spell.name}</p>
    </div>
  );
}

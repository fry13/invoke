import React from "react";
import { ISpell } from "../models";

interface SpellProps {
  spell: ISpell;
}

export default function Icon({ spell }: SpellProps) {
  return (
    <div className="w-max h-max mx-auto">
      <img
        className="mx-auto rounded border-2 border-slate-500/50"
        src={spell.image}
        alt={spell.name}
      />
      <p className="mx-auto text-center">{spell.name}</p>
    </div>
  );
}

import React from "react";
import { ISpell } from "../models";
import invoke from "../images/invoke.png";

interface SpellProps {
  spell: ISpell;
}

export default function Icon({ spell }: SpellProps) {
  return (
    <div className="w-max h-max mx-auto">
      <img
        className="mx-auto rounded border border-slate-800 transition-all"
        src={spell.image || invoke}
        alt={spell.name || invoke}
      />
      <p className="mx-auto font-bold text-center">{spell.name || invoke}</p>
    </div>
  );
}

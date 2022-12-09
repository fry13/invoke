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
        className="mx-auto rounded border-2 border-slate-500/50"
        src={spell.image || invoke}
        alt={spell.name}
      />
      <p className="mx-auto text-slate-500/75 font-bold text-center">
        {spell.name}
      </p>
    </div>
  );
}

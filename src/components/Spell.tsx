import React from "react";
import { ISpell } from "../models";

interface SpellProps {
  spell: ISpell;
  imgClasses?: string;
  textClasses?: string;
}

export default function Icon({ spell, imgClasses, textClasses }: SpellProps) {
  return (
    <div>
      <img
        key={spell.id}
        className={`mx-auto rounded border w-20 border-slate-800 transition-all ${imgClasses}`}
        src={spell.image}
        alt={spell.name}
      />
      <p className={`mx-auto font-bold text-center ${textClasses}`}>
        {spell.name}
      </p>
    </div>
  );
}

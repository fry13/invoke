import React from "react";
import { ISpell } from "../models";
import invoke from "../images/invoke.png";

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
        className={`mx-auto rounded border border-slate-800 transition-all animate-spellSlide ${imgClasses}`}
        src={spell.image || invoke}
        alt={spell.name || "invoke"}
      />
      <p className={`mx-auto font-bold text-center ${textClasses}`}>
        {spell.name || "invoke"}
      </p>
    </div>
  );
}

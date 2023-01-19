import React from "react";
import Navigation from "../components/Navigation";
import Orb from "../components/Orb";
import Spell from "../components/Spell";
import { spells } from "../data/spells";

export default function HelpPage() {
  let spellsArr = spells.map(function (spell) {
    let spellOrbs = spell.buttons[0];
    return (
      <li className="w-1/3" key={spell.id}>
        <Spell spell={spell} imgClasses={"w-11 h-11"} textClasses="hidden" />
        <div className="flex justify-center mt-1">
          <Orb classes="h-6" button={spellOrbs[0]} />
          <Orb classes="h-6" button={spellOrbs[1]} />
          <Orb classes="h-6" button={spellOrbs[2]} />
        </div>
      </li>
    );
  });
  return (
    <>
      <Navigation exit={true} />
      <ul className="flex flex-wrap justify-around text-center h-full content-around">
        {spellsArr}
      </ul>
    </>
  );
}

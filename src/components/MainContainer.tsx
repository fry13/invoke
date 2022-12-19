import React from "react";
import { spells } from "../spells";
import Icon from "./Spell";

export default function MainContainer({ Children }: any) {
  let res = spells.map(function (item) {
    return <Icon key={item.id} spell={spells[item.id]} />;
  });

  return (
    <>
      <div className="w-1/4 h-1/3 mx-auto text-center rounded p-2 shadow-lg border border-slate-800 text-slate-800 relative">
        {Children}
      </div>
      {/* <div className="w-80 h-80 fixed rounded border border-slate-800 text-slate-800 right-20 bottom-20 ">
        {res}
      </div> */}
    </>
  );
}

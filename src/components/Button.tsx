import React from "react";
//from-rose-400 via-fuchsia-500 to-indigo-500 text-white
export default function Button(props: any) {
  return (
    <button
      className={`bg-gradient-to-tr border-2 border-slate-500/50 text-slate-500/75 cursor-pointer hover:border-slate-500/75 hover:text-slate-500/75 ${props.classes}`}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}

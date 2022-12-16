import React from "react";
export default function Button(props: any) {
  return (
    <button
      className={`border border-slate-800 cursor-pointer hover:bg-slate-100 active:bg-slate-200 focus:outline-none transition-colors ${props.classes}`}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}

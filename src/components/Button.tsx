import React from "react";
export default function Button(props: any) {
  return (
    <button
      className={`border border-slate-800 dark:border-slate-500 cursor-pointer hover:bg-slate-800 dark:hover:bg-slate-50 hover:text-slate-100 dark:hover:text-slate-800 active:bg-slate-900 dark:active:bg-slate-200 focus:outline-none transition-colors ${props.classes}`}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}

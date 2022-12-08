import React from "react";

export default function Button(props: any) {
  return (
    <button
      className={`bg-gradient-to-tr from-rose-400 via-fuchsia-500 to-indigo-500 text-white cursor-pointer hover:bg-gradient-to-bl ${props.classes}`}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}

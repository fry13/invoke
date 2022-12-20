import React from "react";

export default function MainContainer({ Children }: any) {
  return (
    <div className="w-1/4 h-1/3 flex flex-col justify-center mx-auto text-center rounded p-2 shadow-lg border border-slate-800 text-slate-800 relative">
      {Children}
    </div>
  );
}

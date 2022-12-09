import React from "react";

export default function MainContainer({ Children }: any) {
  return (
    <div className="w-1/4 h-1/3 mx-auto text-center rounded p-2 shadow-lg border-2 border-slate-500/25 text-slate-500/75">
      {Children}
    </div>
  );
}

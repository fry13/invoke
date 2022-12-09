import React from "react";

export default function MainContainer({ Children }: any) {
  return (
    <div className="w-1/3 h-1/3 mx-auto text-center bg-gradient-to-t from-slate-50 to-white rounded p-2 pb-8 shadow-xl">
      {Children}
    </div>
  );
}

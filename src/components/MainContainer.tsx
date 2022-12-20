import React from "react";

interface ChildrenProps {
  children: JSX.Element;
}

export default function MainContainer({ children }: ChildrenProps) {
  return (
    <div className="w-1/4 h-1/3 flex flex-col justify-center mx-auto text-center rounded p-2 shadow-lg border border-slate-800 text-slate-800 relative">
      {children}
    </div>
  );
}

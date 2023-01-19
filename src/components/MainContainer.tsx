import React from "react";

interface ChildrenProps {
  children: JSX.Element;
}

export default function MainContainer({ children }: ChildrenProps) {
  return (
    <div className="transition-colors w-1/4 h-1/3 flex flex-col justify-center mx-auto text-center rounded p-2 shadow-lg border bg-slate-100 dark:bg-slate-900 border-slate-800 dark:border-slate-500 text-slate-800 dark:text-slate-100 relative">
      {children}
    </div>
  );
}

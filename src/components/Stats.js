import React from "react";

const Stats = ({number, text, sidebar}) => {
  return (
    <div className="flex h-50 items-center gap-4">
      <div>
        <h1 className="text-2xl font-bold">{number}</h1>
        <p className="text-sm">{text}</p>
      </div>
      {sidebar && <div className="h-30 w-1 bg-blue-400 rounded-md"></div>}
    </div>
  );
};

export default Stats;

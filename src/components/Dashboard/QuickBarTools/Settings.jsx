import React from "react";

export const Settings = ({ isShowSetting, setShowSetting }) => {
  return (
    <div
      className={`${
        isShowSetting ? "right-0" : ""
      } absolute  right-[68px] top-[72px] bg-red-500 p-7 shadow-xl h-[300px] `}>
      <p>Dark Mode</p>
      <p>Hide Quick Bar</p>
    </div>
  );
};

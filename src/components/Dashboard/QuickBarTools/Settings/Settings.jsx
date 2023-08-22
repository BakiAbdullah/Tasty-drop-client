import React from "react";
import "./Settings.css"; // Import your custom CSS file
import Toggle from "../../../Toggle";

export const Settings = ({ isShowSetting, setShowSetting }) => {
  return (
    <div
      className={`settings-panel ${
        isShowSetting ? "visible" : "invisible"
      } bg-white border border-slate-200 p-7 shadow-xl space-y-4 text-lg`}>
      <Toggle />
      <Toggle />
    </div>
  );
};

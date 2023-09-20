import { useEffect, useState } from "react";
import "./Settings.css"; // Import your custom CSS file
import { RxCrossCircled } from "react-icons/rx";
import Toggle from "../../../Utils/Toggle";
import DarkMode from "../../../Utils/ManageDarkMode";
export const Settings = ({
  isShowSetting,
  setShowSetting,
  showQuickBar,
  setShowQuickBar,
}) => {
  console.log(showQuickBar);
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setShowSetting(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [setShowSetting]);
  return (
    <div
      className={`settings-panel ${
        isShowSetting ? "visible shadow-bar" : "invisible"
      } bg-white border border-slate-200 p-7 shadow-xl space-y-4 text-lg z-20 h-full lg:w-[350px]  dark-bg `}>
      <span className="flex items-center  justify-between">
        <h1 className="text-slate-500 dark-title">Settings</h1>
        <button onClick={() => setShowSetting(!isShowSetting)}>
          <RxCrossCircled className="hover:text-slate-500 " size={22} />
        </button>
      </span>
      <hr className="border border-slate-200" />
      <h1 className="lg:text-[15px] font-semibold text-slate-500 dark-title">
        Customize
      </h1>
      <div className="flex items-center gap-3 text-sm lg:text-[15px] dark-text ">
        <DarkMode /> Dark Mode
      </div>
      <div className="flex items-center gap-3 text-sm lg:text-[15px] dark-text">
        <Toggle enabled={showQuickBar} setEnabled={setShowQuickBar} /> Hide
        Quickbar
      </div>

      <h1 className="lg:text-[15px] font-semibold text-slate-500  dark-text">
        Keyboard shortcuts
      </h1>
      <p className="text-sm dark-text">
        <span className="text-orange-500 font-mono font-semibold ">Esc</span>{" "}
        close quickbar
      </p>
      <p className="text-sm dark-text">
        <span className="text-orange-500 font-mono font-semibold ">
          Alt + (1 - 6)
        </span>{" "}
        to open quickbar
      </p>
    </div>
  );
};

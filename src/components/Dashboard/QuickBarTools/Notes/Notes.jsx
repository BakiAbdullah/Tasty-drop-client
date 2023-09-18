import React from "react";
import { RxCrossCircled } from "react-icons/rx";

const Notes = ({ isShowNotes, setShowNotes }) => {
  return (
    <div
      className={`settings-panel ${
        isShowNotes ? "visible shadow-bar" : "invisible"
      } bg-white border border-slate-200 p-7 shadow-xl space-y-4 text-lg z-20 h-full lg:w-[350px]`}>
      <span className="flex items-center  justify-between">
        <h1 className="text-slate-500">Notes</h1>
        <button onClick={() => setShowNotes(!isShowNotes)}>
          <RxCrossCircled className="hover:text-slate-500 " size={22} />
        </button>
      </span>
      <hr className="border border-slate-200" />

      <div></div>
    </div>
  );
};

export default Notes;

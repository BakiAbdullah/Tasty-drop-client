import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import {
  useAddNoteMutation,
  useDeleteNoteMutation,
  useGetNotesQuery,
} from "../../../../redux/reduxApi/notesApi";
import useAuth from "../../../../api/useAuth";
import moment from "moment/moment";
import { FiLoader } from "react-icons/fi";

const Notes = ({ isShowNotes, setShowNotes }) => {
  const currentTime = moment();

  const { user } = useAuth();
  const [text, setText] = useState("");
  const {
    data: notesData,
    isLoading: loading,
    refetch,
  } = useGetNotesQuery(user?.email);
  const [deleteNotes, { isLoading }] = useDeleteNoteMutation();
  const [addNote, { isLoading: addLoading }] = useAddNoteMutation();
  const handleNotes = async (e) => {
    e.preventDefault();
    await addNote({
      email: user?.email,
      note: text,
      timestamp: currentTime,
    });
    setText("");
    refetch();
  };

  const handleDelete = async (id) => {
    await deleteNotes(id);
    refetch();
  };
  console.log(notesData);
  return (
    <div
      className={`settings-panel ${
        isShowNotes ? "visible shadow-bar" : "invisible"
      } bg-white border border-slate-200 p-7 shadow-xl space-y-4 text-lg z-20 h-full lg:w-[350px]`}>
      <span className="flex items-center  justify-between overflow-y-auto">
        <h1 className="text-slate-500">Notes</h1>
        <button onClick={() => setShowNotes(!isShowNotes)}>
          <RxCrossCircled className="hover:text-slate-500 " size={22} />
        </button>
      </span>
      <hr className="border border-slate-200" />

      <form onSubmit={handleNotes}>
        <p className="text-sm mb-2">Add Notes</p>
        <textarea
          required
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full rounded border-zinc-400 text-sm"
          placeholder="write your note..."
        />
        <button
          type="submit"
          className="bg-sky-500/50 text-sm rounded text-white px-4 py-1 hover:bg-sky-600/50 ">
          {addLoading ? "Adding" : "Add Note"}
        </button>
      </form>

      {/* <hr /> */}

      {loading || isLoading ? (
        <div className="pt-24 flex justify-center">
          <FiLoader className="animate-spin" size={30} />
        </div>
      ) : (
        <div className="space-y-2 ">
          {notesData &&
            notesData?.map((notes) => (
              <div
                key={notes?._id}
                className="border p-3 rounded border-zinc-300 shadow-md">
                <p className="text-sm tracking-wide text-zinc-600">
                  {notes?.note}
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-xs mt-2 bg-zinc-200 px-2 py-0.5 rounded-full ">
                    {moment(notes?.timestamp).fromNow()}
                  </p>
                  <button
                    onClick={() => handleDelete(notes?._id)}
                    title="delete"
                    className="ml-auto block mr-2 bg-rose-400 text-white p-2 rounded-full hover:bg-rose-500 duration-200 transition-colors my-1">
                    <FaTrash size={12} />
                  </button>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Notes;

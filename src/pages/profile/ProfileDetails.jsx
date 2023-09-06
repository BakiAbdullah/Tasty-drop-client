import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const inputClass = " ";
const ProfileDetails = () => {
  const [isDisabled, setDisabled] = useState("");

  const { register, handleSubmit } = useForm();
  const onsubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="bg-gray">
      {" "}
      <div className="pt-24 max-w-3xl mx-auto px-5 lg:px-0">
        <div className="border border-zinc-200 bg-white rounded">
          <h1 className="text-2xl font-bold text-zinc-600 p-5">
            Account Details
          </h1>
          <hr className="text-zinc-300 mt-2" />
          <form
            onSubmit={handleSubmit(onsubmit)}
            className="grid grid-cols-2 gap-6 p-8 ">
            {/* <label className="flex flex-col gap-2">
              <span className="text-zinc-500 text-sm">First name</span>
              <input
                name="first_"
                className={inputClass}
                type="text"
                placeholder="first name"
              />
            </label> */}
            <label className="flex flex-col gap-2">
              <span className="text-zinc-500 text-sm">Last name</span>
              <input
                className={inputClass}
                type="text"
                placeholder="last name"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-zinc-500 text-sm">Email</span>
              <input className={inputClass} type="text" placeholder="email" />
              <p className="text-sm text-zinc-700">
                To change your email address, please contact customer support.
              </p>
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-zinc-500 text-sm">Phone number</span>
              <input
                type="text"
                placeholder="phone number"
                className={inputClass}
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-zinc-500 text-sm">Date of birth</span>
              <input
                type="date"
                placeholder="date of birth"
                className={inputClass}
              />
              <p className="text-sm text-zinc-700">
                We'll only use this to verify your age on restricted products.
              </p>
            </label>
          </form>
        </div>

        <div className="border border-zinc-200 mt-5 bg-white rounded">
          <h1 className="text-2xl font-bold text-zinc-800 p-5">
            Delete account
          </h1>
          <hr className="text-zinc-400 mt-2" />
          <div className="p-8 space-y-4  text-sm text-zinc-600 ">
            <h1>
              To submit a request for us to delete your account, type “DELETE”
              in the box below.
            </h1>
            <p>
              Once you’ve submitted your request you’ll no longer be able to log
              in, access your credit, or restore your account.
            </p>
            <p>
              We’ll delete your account and associated personal data within one
              month, and in line with our Privacy Policy. Deleting your account
              is permanent.
            </p>
            <div className="space-y-3">
              <p>Type “DELETE”</p>
              <span className="flex flex-col">
                <input
                  onChange={(e) => setDisabled(e.target.value)}
                  className={inputClass}
                  type="text"
                  placeholder="Type “DELETE”
                  
"
                />
                <button
                  disabled={isDisabled !== "DELETE"}
                  className={`${
                    isDisabled === "DELETE"
                      ? "bg-red-500 hover:bg-red-600 transition-all"
                      : "bg-zinc-300"
                  } font-bold text-white rounded-md  py-2 mt-2 w-2/3`}>
                  Permanently delete account
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;

import React from "react";
import { useState } from "react";
import { set, useForm, useWatch } from "react-hook-form";
import { FiLoader } from "react-icons/fi";
import useAuth from "../../api/useAuth";
import { deleteUser } from "firebase/auth";
import {
  useGetProfileQuery,
  useUpdateProfileMutation,
  useDeleteUserMutation,
} from "../../redux/reduxApi/userApi";
import { toast } from "react-hot-toast";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ProfileDetails = () => {
  const { user, profileUpdate, auth, logOut } = useAuth();
  const [isDisabled, setDisabled] = useState(false);
  const [removeUser] = useDeleteUserMutation();
  const { data: profileData } = useGetProfileQuery(`${user?.email}`);
  const [updateUserProfile, { error, isLoading }] = useUpdateProfileMutation();
  const { register, handleSubmit, control } = useForm();
  const watchedName = useWatch({ control, name: ["name", "address", "date"] });

  const navigate = useNavigate();

  const onsubmit = (data) => {
    console.log(data);
    // update backend user data
    updateUserProfile({ email: user?.email, data })
      .then((res) => {
        console.log(res);
        if (res.data.modifiedCount > 0) {
          profileUpdate({ name: data.name, photoUrl: user?.photoURL }).then(
            (res) => {
              toast.success("Profile updated!");
            }
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // delete user data
  const handleDelete = () => {
    removeUser({ email: user?.email })
      .then((res) => {
        deleteUser(auth.currentUser).then(() => {
          navigate("/");
          toast.success("Account deleted!");
          logOut();
        });
      })
      .catch((err) => {
        console.log(err);
      });
    // deleteUser();
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
          <form onSubmit={handleSubmit(onsubmit)} className="p-8">
            <div className="grid lg:grid-cols-2 gap-6  ">
              <label className="flex flex-col gap-2">
                <span className="text-zinc-500 text-sm">Name</span>
                <input
                  {...register("name")}
                  className="input-style"
                  type="text"
                  placeholder="Name"
                  defaultValue={user?.displayName}
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-zinc-500 text-sm">Your address</span>
                <input
                  {...register("address")}
                  name="address"
                  type="text"
                  defaultValue={profileData?.address}
                  placeholder="your address"
                  className="input-style"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-zinc-500 text-sm">Phone number</span>
                <fieldset disabled>
                  <input
                    {...register("phone")}
                    name="phone"
                    type="text"
                    defaultValue={profileData?.number}
                    placeholder="phone number"
                    className="input-style text-zinc-400"
                  />
                </fieldset>
                <p className="text-sm text-zinc-700">
                  To change your phone number, please contact customer support.
                </p>
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-zinc-500 text-sm">Email</span>
                <fieldset disabled>
                  <input
                    {...register("email")}
                    className="input-style  text-zinc-400"
                    type="text"
                    name="email"
                    placeholder="email"
                    defaultValue={user?.email}
                  />
                </fieldset>
                <p className="text-sm text-zinc-700">
                  To change your email address, please contact customer support.
                </p>
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-zinc-500 text-sm">Date of birth</span>
                <input
                  {...register("date")}
                  name="date"
                  type="date"
                  placeholder="date of birth"
                  className="input-style"
                  defaultValue={profileData?.date}
                />
                <p className="text-sm text-zinc-700">
                  We'll only use this to verify your age on restricted products.
                </p>
              </label>
            </div>
            <button
              disabled={!watchedName || isLoading}
              type="submit"
              className={`${
                isDisabled ? "bg-gray text-zinc-400" : "bg-orange-500"
              } py-2 w-44  text-white font-bold rounded mt-5 px-3 hover:`}>
              {isLoading ? (
                <FiLoader
                  className="animate-spin m-auto text-white "
                  size={24}
                />
              ) : (
                "Update profile"
              )}
            </button>
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
                  className="input-style"
                  type="text"
                  placeholder="Type “DELETE”
                  
"
                />
                <button
                  onClick={handleDelete}
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

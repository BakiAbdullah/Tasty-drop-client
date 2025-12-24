import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast, { Toaster } from "react-hot-toast";
import useAuth from "../../../api/useAuth";
import { FiLoader } from "react-icons/fi";

const AddMenu = () => {
  const menuCategories = [
    "appetizers",
    "deshi",
    "desserts",
    "drinks",
    "fast food",
  ];
  const { user } = useAuth();
  const [menuItems, setMenuItems] = useState([]);
  const { axiosSecure } = useAxiosSecure();
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  console.log(user);
  const {
    handleSubmit,
    watch,
    reset,
    register,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    axiosSecure
      .get(`restaurant-data?email=${user?.email}`)
      // .then((res) => res.json())
      .then((data) => {
        setMenuItems(data.data);
        console.log(data);
      });
  }, [user?.email, axiosSecure]);

  const onSubmit = async (data) => {
    setIsLoading(true);
    console.log(data); // Handle form submission here
    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMAGEBB_KEY
    }`;
    const imageData = data.menuItemImage[0];
    const formData = new FormData();
    formData.append("image", imageData);
    try {
      const response = await axios.post(url, formData);
      const imgUrl = response.data.data.display_url;
      data.menuItemImage = imgUrl;
      data.email = user?.email;

      // Getting the date when a menu is added
      const currentDate = new Date();
      const formattedDate = currentDate.toLocaleDateString();
      //  const formattedTIme = currentDate.toLocaleTimeString();
      data.menuPostedDate = formattedDate;

      console.log(data);
      axiosSecure
        .post("partner", data)
        .then((res) => {
          console.log(res);
          if (res?.data?.modifiedCount > 0) {
            toast.success("your menu added successfully!");
            reset();
            setSelectedFile(null);
            setIsLoading(false);
          }
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file.name);
    }
  };

  return (
    <div className="lg:max-w-5xl relative max-w-4xl mx-auto text-black/80 flex flex-col min-h-[calc(90vh-70px)] justify-center items-center rounded-xl">
      <form className="md:w-4/6 z-10" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 items-center justify-center lg:grid-cols-2 gap-5">
          <div className="space-y-6">
            <div className="space-y-1 text-sm mb-3">
              <label className="block dark-text">Menu item name</label>
              <input
                placeholder="Item name"
                {...register("menuItemName", { required: true })}
                className="w-full px-4 py-3 border-none shadow-sm focus:outline-none rounded-md dark-input"
                type="text"
              />
              {errors.menuItemName && (
                <span className="text-red-500 mt-2 ">
                  Menu item name is required
                </span>
              )}
            </div>
            <div className="space-y-1 text-sm">
              <label className="block dark-text">Menu item image</label>
              <div className="flex justify-start px-6 items-center py-3 bg-white dark-input shadow-sm rounded-md">
                <div className=" text-center">
                  <div className="flex items-center text-sm ">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md text-peach dark:bg-white/30 bg-gray font-shadow-sm">
                      <span className="px-1">
                        {selectedFile
                          ? selectedFile.slice(0, 37)
                          : "Upload a file"}
                      </span>
                      <input
                        id="file-upload"
                        type="file"
                        className="sr-only"
                        {...register("menuItemImage")}
                        onChange={handleFileChange}
                      />
                    </label>
                    <span className="pl-3 text-black/80 dark-text">
                      {!selectedFile && "or drag and drop"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-1 text-sm">
              <label htmlFor="category" className="block dark-text">
                Menu category
              </label>
              <select
                {...register("menuCategory", { required: true })}
                className="w-full custom-select px-4 py-3 shadow-sm border-none focus:outline-none p-2 bg-white text-gray-800 rounded-md dark-input">
                <option value="">Select a category</option>
                {menuCategories.map((category, index) => (
                  <option
                    className="bg-peach py-10 px-6 hover:bg-transparent hover:text-pink text-white"
                    value={category}
                    key={index}>
                    {category}
                  </option>
                ))}
              </select>
              {errors.menuCategory && (
                <p className="text-red-500 mt-20">Please select a category</p>
              )}
            </div>

            <div className="">
              <div className="space-y-1 text-sm">
                <label className="block  dark-text">Menu item price</label>
                <input
                  placeholder="Price"
                  {...register("menuItemPrice", {
                    pattern: /^[0-9]+$/,
                    message: "Please enter a valid price",
                  })}
                  className="w-full px-4 py-3 border-none shadow-sm focus:outline-none rounded-md dark-input"
                  type="number"
                />
                {errors.menuItemPrice && (
                  <span className="text-red-500 mt-2">
                    {errors.menuItemPrice.message}
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-1 lg:col-span-2 text-sm">
            <label className="block  dark-text">Item Delivery Time</label>
            <input
              placeholder="Delivery time"
              {...register("ItemDeliveryTime")}
              className="block rounded-md resize-none w-full  px-4 py-3 border-none shadow-sm focus:outline-gray dark-input"
              type="text"
            />
          </div>
          <div className="space-y-1 lg:col-span-2 text-sm">
            <label className="block  dark-text">
              Menu item description{" "}
              <span className="text-red-500">*(max 200 characters)</span>
            </label>
            <textarea
              placeholder="Description"
              {...register("menuItemDescription")}
              className="block dark-input rounded-md resize-none w-full h-32 px-4 py-3 shadow-sm focus:outline-gray border-none"
              maxLength={200}
            />
          </div>
        </div>

        <button
          disabled={isLoading}
          type="submit"
          className="w-full mt-10 py-4 btn btn-outline btn-sm rounded-md bg-ocean text-white font-bold">
          {isLoading ? (
            <FiLoader className="animate-spin" size={30} />
          ) : (
            "Add Menu"
          )}
        </button>
      </form>

      {/* Animated Images */}
      <img loading="lazy"
        src="https://i.ibb.co/DgQMxn9/delicious-pizza.png"
        className="hidden lg:block absolute -right-20 object-cover bottom-0 w-72 animate-blob animation-delay-4000"
        alt=""
      />
      <img loading="lazy"
        src="https://i.ibb.co/xfQHWYb/slice-pizza.png"
        className="hidden lg:block absolute left-5 top-20 h-16 animate-blob"
        alt=""
      />
      <Toaster />
    </div>
  );
};

export default AddMenu;

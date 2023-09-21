import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast, { Toaster } from "react-hot-toast";
import useAuth from "../../../api/useAuth";
import useOrdersData from "../../../Hooks/useOrderData";

const UpdateRestaurantInfo = () => {
  const { restaurantData } = useOrdersData();
  console.log(restaurantData);

  const deliveryFees = [30, 40, 50, 60, 70, 80, 90, 100];
  const { user } = useAuth();
  const { axiosSecure } = useAxiosSecure();
  const [selectedFile, setSelectedFile] = useState(null);
  // console.log(user);

  const {
    handleSubmit,
    watch,
    register,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      outletName: restaurantData?.outletName,
      photo: restaurantData?.photo,
      deliveryFee: restaurantData?.deliveryFee,
      discountOnItems: restaurantData?.discountOnItems,
      OpeningTime: restaurantData?.openingTime,
      closingTime: restaurantData?.closingTime,
      ItemDeliveryTime: restaurantData?.ItemDeliveryTime,
      restaurantDescription: restaurantData?.restaurantDescription,
    },
  });

  useEffect(() => {
    setValue("outletName", restaurantData?.outletName || "");
    setValue("deliveryFee", restaurantData?.deliveryFee || "");
    setValue("OpeningTime", restaurantData?.OpeningTime || "");
    setValue("closingTime", restaurantData?.closingTime || "");
    setValue("photo", restaurantData?.photo || "");
    setValue("discountOnItems", restaurantData?.discountOnItems || "");
    setValue("ItemDeliveryTime", restaurantData?.ItemDeliveryTime || "");
    setValue(
      "restaurantDescription",
      restaurantData?.restaurantDescription || ""
    );
  }, [restaurantData, setValue]);

  const onSubmit = async (data) => {
    try {
      let imgUrl = restaurantData?.photo; // Using the current image URL as default value.
      const url = `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_IMAGEBB_KEY
      }`;
      const imageData = data.photo[0];
      const formData = new FormData();
      formData.append("image", imageData);

      const response = await axios.post(url, formData);
      imgUrl = response.data.data.display_url;

      const updatedData = {
        ...data,
        photo: imgUrl, // Set the image URL in the updated data.
        email: user?.email,
      };

      axiosSecure
        .put(`partner/${restaurantData?._id}`, updatedData)
        .then((res) => {
          if (res?.data?.modifiedCount > 0) {
            toast.success("Menu item updated successfully!");
          } else {
            toast.error("Failed to update menu item.");
          }
        });
    } catch (error) {
      console.error(error);
    }
  };

  // For showing the image name after uploading
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file.name);
    }
  };
  return (
    <div className="lg:max-w-5xl relative max-w-4xl mx-auto text-black/80 flex flex-col md:flex-row min-h-[calc;(90vh-70px)] justify-center rounded-xl ">
    
      <form className="md:w-4/6" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 items-center justify-center lg:grid-cols-2 gap-5">
          <div className="space-y-6">
            <div className="space-y-1 text-sm mb-3">
              <label className="block dark-text">Outlet name</label>
              <input
                placeholder="Enter your outlet name"
                {...register("outletName", { required: true })}
                className="w-full px-4 py-3 border-none shadow-sm focus:outline-none rounded-md dark-input"
                type="text"
              />
              {errors.outletName && (
                <span className="text-red-500 mt-2">
                  Outlet name is required
                </span>
              )}
            </div>
            <div className="space-y-1 text-sm">
              <label className="block dark-text">Featured item image</label>
              <div className="flex justify-start px-6 items-center dark-input py-3 bg-white shadow-sm rounded-md">
                <div className=" text-center">
                  <div className="flex items-center text-sm">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md dark:bg-white/30 text-peach bg-gray font-shadow-sm">
                      <span className="px-2">
                        {selectedFile
                          ? selectedFile.slice(0, 37)
                          : "Upload a file"}
                      </span>
                      <input
                        id="file-upload"
                        type="file"
                        className="sr-only"
                        name="photo"
                        {...register("photo")}
                        onChange={handleFileChange}
                      />
                      {errors.photo && (
                        <p className="text-red-500 mt-20">
                          Please upload your menu image
                        </p>
                      )}
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
            <div className="space-y-2 text-sm">
              <label htmlFor="category" className="block dark-text">
                Delivery fee
              </label>
              <select
                {...register("deliveryFee", { required: true })}
                className="w-full custom-select px-4 py-3 shadow-sm border-none focus:outline-none p-2 bg-white text-gray-800 rounded-md dark-input">
                <option value="">Select your delivery fee</option>
                {deliveryFees.map((category, index) => (
                  <option
                    className="bg-gray py-10 px-6 hover:bg-transparent hover:text-pink text-black/80"
                    value={category}
                    key={index}>
                    {category}
                  </option>
                ))}
              </select>
              {errors.deliveryFee && (
                <p className="text-red-500 mt-20">Please select a category</p>
              )}
            </div>

            <div className="space-y-1 text-sm">
              <label className="block dark-text">Discount on items</label>
              <input
                {...register(
                  "discountOnItems",
                  {
                    pattern: /^[0-9]+$/,
                    message: "Please enter a valid price",
                  },
                  { required: true }
                )}
                className="w-full px-4 py-3 border-none shadow-sm focus:outline-none rounded-md dark-input"
                type="number"
              />
              {errors.discountOnItems && (
                <span className="text-red-500 mt-2">
                  {errors.discountOnItems.message}
                </span>
              )}
            </div>
          </div>

          <div className="space-y-1 text-sm">
            <label className="block dark-text">Opening Time</label>
            <input
              {...register(
                "OpeningTime",
                {
                  pattern: /^[0-9]+$/,
                  message: "Please enter a valid opening time",
                },
                { required: true }
              )}
              className="w-full px-4 py-3 border-none shadow-sm focus:outline-none rounded-md dark-input"
            />
            {errors.OpeningTime && (
              <span className="text-red-500 mt-2">
                {errors.OpeningTime.message}
              </span>
            )}
          </div>
          <div className="space-y-1 text-sm">
            <label className="block dark-text">Closing Time</label>
            <input
              {...register(
                "closingTime",
                {
                  pattern: /^[0-9]+$/,
                  message: "Please enter a valid closing time",
                },
                { required: true }
              )}
              className="w-full px-4 py-3 border-none shadow-sm focus:outline-none rounded-md dark-input"
            />
            {errors.closingTime && (
              <span className="text-red-500 mt-2">
                {errors.closingTime.message}
              </span>
            )}
          </div>

          <div className="space-y-1 lg:col-span-2 text-sm">
            <label className="block dark-text">Restaurant description</label>
            <textarea
              {...register("restaurantDescription")}
              className="block dark-input rounded-md resize-none w-full h-32 px-4 py-3 shadow-sm focus:outline-gray border-none"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-10 py-4 btn btn-outline btn-sm rounded-md font-bold">
          Update Restaurant Info
        </button>
      </form>

      {/* Animated Images */}
      <img loading="lazy"
        src="/smiling-cook.png"
        className="hidden lg:block dark-textabsolute -right-24 object-cover bottom-16 w-72"
        alt=""
      />
      <Toaster />
    </div>
  );
};

export default UpdateRestaurantInfo;

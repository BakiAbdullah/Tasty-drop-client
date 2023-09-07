import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
// import { useImageUpload } from "../../../Hooks/useImageUpload";

const MenuForm = ({ menuItem, onClose,refetch }) => {
  console.log(menuItem); // Getting the single menu item
  const menuCategories = [
    "appetizers",
    "deshi",
    "Chineese",
    "desserts",
    "drinks",
    "fast food",
  ];
  const user = useSelector((state) => state.user.user);
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
      menuItemName: menuItem?.menuItemName,
      menuItemImage: menuItem?.menuItemImage,
      menuCategory: menuItem?.menuCategory,
      menuItemPrice: menuItem?.menuItemPrice,
      ItemDeliveryTime: menuItem?.ItemDeliveryTime,
      menuItemDescription: menuItem?.menuItemDescription,
    },
  });

  useEffect(() => {
    setValue("menuItemName", menuItem?.menuItemName || "");
    setValue("menuCategory", menuItem?.menuCategory || "");
    setValue("menuItemImage", menuItem?.menuItemImage || "");
    setValue("menuItemPrice", menuItem?.menuItemPrice || "");
    setValue("ItemDeliveryTime", menuItem?.ItemDeliveryTime || "");
    setValue("menuItemDescription", menuItem?.menuItemDescription || "");
  }, [menuItem, setValue]);

  const onSubmit = async (data) => {
    try {
      let imgUrl = data.menuItemImage; // Using the current image URL as default value.
      const url = `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_IMAGEBB_KEY
      }`;
      const imageData = data.menuItemImage[0];
      const formData = new FormData();
      formData.append("image", imageData);

      const response = await axios.post(url, formData);
      imgUrl = response.data.data.display_url;

      data.menuItemImage = imgUrl;
      data.email = user?.email;

      axiosSecure
        .put(`/update-menu-item/${user?.email}/${menuItem?._id}`, data)
        .then((res) => {
          if (res?.data?.success) {
            toast.success("Menu item updated successfully!");
            refetch()
            onClose();
          } else {
            toast.error("Failed to update menu item.");
          }
        });
    } catch (error) {
      console.error(error);
    }
  };

  const handleFileChange = () => {
    const selectedFile = watch("menuItemImage");
    const file = selectedFile[0];
    setSelectedFile(file);
     console.log("Selected File:", file); 
  };
  return (
    <div className="text-black/80 max-w-4xl flex flex-col py-14 justify-center items-center rounded-xl">
      <form className="px-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 items-center justify-center lg:grid-cols-2 gap-5">
          <div className="space-y-6">
            <div className="space-y-1 text-sm mb-3">
              <label className="block">Menu item name</label>
              <input
                {...register("menuItemName", { required: true })}
                className="w-full px-4 py-3 border-none shadow-sm focus:outline-none rounded-md"
                type="text"
              />
              {errors.menuItemName && (
                <span className="text-red-500 mt-2">
                  Menu item name is required
                </span>
              )}
            </div>
            <div className="space-y-1 text-sm">
              <label className="block ">Menu item image</label>
              <div className="flex justify-start px-6 items-center py-3 bg-white shadow-sm rounded-md">
                <div className=" text-center">
                  <div className="flex items-center text-sm ">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md text-peach bg-gray font-shadow-sm"
                    >
                      <span className="px-2">
                        {selectedFile ? selectedFile.name : "Upload a file"}
                      </span>
                      <input
                        id="file-upload"
                        type="file"
                        className="sr-only"
                        name="menuItemImage"
                        {...register("menuItemImage")}
                        accept="image/*"
                        onChange={handleFileChange}
                      />
                      {errors.menuItemImage && (
                        <p className="text-red-500 mt-20">
                          Please upload your menu image
                        </p>
                      )}
                    </label>
                    <span className="pl-3 text-black/80">
                      {!selectedFile && "or drag and drop"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-2 text-sm">
              <label htmlFor="category" className="block">
                Menu category
              </label>
              <select
                {...register("menuCategory", { required: true })}
                className="w-full custom-select px-4 py-3 shadow-sm border-none focus:outline-none p-2 bg-white text-gray-800 rounded-md"
              >
                <option value="">Select a category</option>
                {menuCategories.map((category, index) => (
                  <option
                    className="bg-peach py-10 px-6 hover:bg-transparent hover:text-pink text-white"
                    value={category}
                    key={index}
                  >
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
                <label className="block ">Menu item price</label>
                <input
                  {...register("menuItemPrice", {
                    pattern: /^[0-9]+$/,
                    message: "Please enter a valid price",
                  })}
                  className="w-full px-4 py-3 border-none shadow-sm focus:outline-none rounded-md"
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
            <label className="block ">Item Delivery Time</label>
            <input
              {...register("ItemDeliveryTime")}
              className="block rounded-md resize-none w-full  px-4 py-3 border-none shadow-sm focus:outline-gray"
              type="text"
            />
          </div>
          <div className="space-y-1 lg:col-span-2 text-sm">
            <label className="block ">Menu item description</label>
            <textarea
              {...register("menuItemDescription")}
              className="block rounded-md resize-none w-full h-32 px-4 py-3 shadow-sm focus:outline-gray border-none"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-10 py-4 btn btn-outline btn-sm rounded-md font-bold"
        >
          Update Menu Item
        </button>
      </form>
    </div>
  );
};

export default MenuForm;

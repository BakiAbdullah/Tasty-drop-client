import { useForm } from "react-hook-form";

const AddMenu = () => {
  const menuCategories = ["appetizers", "desserts", "drinks", "fast food"];
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Handle form submission here
  };

  return (
    <div className="max-w-5xl flex flex-col min-h-[calc(100vh-85px)] justify-center items-center rounded-xl">
      <form className="w-4/6" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 items-center justify-center lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="space-y-1 text-sm mb-3">
              <label className="block text-gray-600">Menu item name</label>
              <input
                {...register("menuItemName", { required: true })}
                className="w-full px-4 py-3 text-gray-800 border border-peach focus:outline-none rounded-md"
                type="text"
              />
              {errors.menuItemName && (
                <span className="text-red-500 mt-2">Menu item name is required</span>
              )}
            </div>
            <div className="space-y-1 text-sm">
              <label className="block text-gray-600">Menu item image</label>
              <input
                {...register("menuItemImage")}
                className="w-full px-4 py-3 text-gray-800 border border-peach focus:outline-none rounded-md"
                type="text"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-1 text-sm">
              <label htmlFor="category" className="block text-gray-600">
                Menu category
              </label>
              <select
                {...register("menuCategory", { required: true })}
                className="w-full px-4 py-3 border border-peach focus:outline-none rounded-md"
              >
                <option value="">Select a category</option>
                {menuCategories.map((category, index) => (
                  <option value={category} key={index}>
                    {category}
                  </option>
                ))}
              </select>
              {errors.menuCategory && (
                <span className="text-red-500">Please select a category</span>
              )}
            </div>

            <div className="">
              <div className="space-y-1 text-sm">
                <label className="block text-gray-600">Menu item price</label>
                <input
                  {...register("menuItemPrice", {
                    pattern: /^[0-9]+$/,
                    message: "Please enter a valid price",
                  })}
                  className="w-full px-4 py-3 text-gray-800 border border-peach focus:outline-none rounded-md"
                  type="text"
                />
                {errors.menuItemPrice && (
                  <span className="text-red-500 mt-2">
                    {errors.menuItemPrice.message}
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-1 col-span-2 text-sm">
            <label className="block text-gray-600">Menu item description</label>
            <textarea
              {...register("menuItemDescription")}
              className="block rounded-md resize-none focus:rose-300 w-full h-32 px-4 py-3 text-gray-800 border border-peach focus:outline-none"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full h-fit mt-10 py-4 btn btn-outline btn-sm rounded-md bg-peach hover:bg-darkAmber text-white font-bold text-darkGray"
        >
          Add Menu
        </button>
      </form>
    </div>
  );
};

export default AddMenu;

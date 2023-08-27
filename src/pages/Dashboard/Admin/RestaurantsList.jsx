import ReactStarsRating from "react-awesome-stars-rating";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";

export const RestaurantsList = () => {
  const cellAlignClass = "px-4 py-2 align-middle"; // Store the common class in a variable

  return (
    <div className="overflow-x-auto">
      <table className="table w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className={cellAlignClass}></th>
            <th className={cellAlignClass}>Product</th>
            <th className={cellAlignClass}>Category</th>
            <th className={cellAlignClass}>Added Date</th>
            <th className={cellAlignClass}>Price</th>
            <th className={cellAlignClass}>Quantity</th>
            <th className={cellAlignClass}>Status</th>
            <th className={cellAlignClass}>Actions</th>
            <th className={cellAlignClass}></th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b hover:bg-gray-100">
            <td className={cellAlignClass}>
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
              </label>
            </td>
            <td className={cellAlignClass}>
              <div className="flex items-center space-x-3">
                <div className="w-24">
                  <img
                    src="https://visitproseccoitaly.com/wp-content/uploads/2022/12/Fried-eggs.jpeg"
                    alt="name of dishes"
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <div>
                  <div className="font-bold w-28">Hart Hagerty</div>
                  <div className="text-sm ">
                    <ReactStarsRating
                      className="flex"
                      isEdit={false}
                      size={16}
                      value={5}
                    />
                  </div>
                </div>
              </div>
            </td>
            <td className={cellAlignClass}>
              <span className="">Pudding</span>
            </td>
            <td className={cellAlignClass}>24.8.2023</td>
            <td className={cellAlignClass}>$12</td>
            <td className={cellAlignClass}>512</td>
            <td className={cellAlignClass}>Active</td>
            <td className={`${cellAlignClass}} flex gap-2 justify-center`}>
              <AiOutlineEye className="text-blue-500 hover:text-blue-700 cursor-pointer" />
              <FiEdit className="text-green-500 hover:text-green-700 cursor-pointer" />
              <AiOutlineDelete className="text-red-500 hover:text-red-700 cursor-pointer" />
            </td>
            <td className={cellAlignClass}></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

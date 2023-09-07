import { useState } from "react";
import orderImg from "../../assets/asset/facility-card-images/boost-order.jpg";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useSelector } from "react-redux";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { toast } from "react-hot-toast";
import SearchbarByLocation from "../../components/SearchbarByLocation/SearchbarByLocation";
import useUsers from "./../../Hooks/useUsers";

const PartnerRegistration = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  // get data from searchBylocation by using props drelling
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [selectedOption3, setSelectedOption3] = useState(null);
  const location = useLocation();
  const user = useSelector((state) => state.user.user);
  const userLocation = location?.state.from;
  const navigate = useNavigate();

  // console.log(userLocation);
  const { axiosSecure } = useAxiosSecure();

  // console.log(location.state.from)
  //  num > 0 ? "Positive" : num < 0 ? "Negative" : num === 0 ? "Zero" : "Unknown";

  // const { usersData } = useUsers();
  const { usersData } = useUsers();
  console.log(usersData);
  // React Hook Form
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMAGEBB_KEY
    }`;

    const imageData = data.photo[0];
    const formData = new FormData();
    formData.append("image", imageData);
    data.locations = {
      division: selectedOption1.value,
      district: selectedOption2.value,
      upazila: selectedOption3.value,
    };
    try {
      const respons = await axios.post(url, formData);
      const imgUrl = respons.data.data.display_url;
      data.photo = imgUrl;
      // data.photo = 'nai'
      if (userLocation === "partner") {
        axiosSecure
          .post(`partner`, data)
          .then((res) => {
            console.log(res);
            if (res.data.result1.acknowledged) {
              toast.success("Congratulation for being partner!");
              reset();
              navigate("/");
            }
          })
          .catch((err) => console.log(err));
      } else if (userLocation === "rider") {
        axiosSecure
          .post("rider", data)
          .then((res) => {
            console.log(res);
            if (res.data.result1.acknowledged) {
              toast.success("You are Rider now!");
              reset();
            }
          })
          .catch((err) => console.log(err));
      } else {
        axiosSecure
          .post("business", data)
          .then((res) => {
            if (res.data.result1.acknowledged) {
              toast.success("Busness account created successfully");
              reset();
            }
          })
          .catch((err) => console.log(err));
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Specific user location in different routes for Form.

  const isEmail = usersData.find((item) => item?.email == user?.email);
  console.log(isEmail);

  const handleFileChange = () => {
    const selectedFile = watch("photo");
    const file = selectedFile[0];
    setSelectedFile(file);
  };

  const employees = ["50", "100", "150", "200", "250", "50"];
  const restaurantDiscount = ["10", "12", "15", "20", "25", "26", "30"];

  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-center bg-gray-50 py-40 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-500 bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${orderImg})`,
      }}
    >
      <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
      <div className="max-w-xl w-full space-y-8 p-10 mt-20 bg-white rounded-xl shadow-lg z-10">
        <div className="grid gap-8 grid-cols-1">
          <div className="flex flex-col ">
            <div className="">
              {userLocation === "rider" ? (
                <h2 className="font-semibold text-xl text-center mb-4">
                  Want to become a Rider? Fill in the form below to become a
                  rider.
                </h2>
              ) : userLocation === "business" ? (
                <h2 className="font-semibold text-xl text-center mb-4">
                  Want to become a Business Partner? Treat your co-workers and
                  clients to great food from the best restaurants.
                </h2>
              ) : (
                <h2 className="font-semibold text-xl text-center mb-4">
                  Interested? Fill in the form below to become our partner and
                  increase your revenue!
                </h2>
              )}
              <p className="mb-2 mt-12">Please fill in below form:</p>
            </div>
            <div className="mt-5">
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Outlet name and location of outlet section */}
                <div className="md:flex mb-4 md:flex-row md:space-x-4 w-full text-sm">
                  <div className="w-full flex flex-col mb-3">
                    {userLocation === "rider" ? (
                      <label className="font-medium text-black/80 py-2">
                        Riders Name
                      </label>
                    ) : userLocation === "business" ? (
                      <label className="font-medium text-black/80 py-2">
                        Company Name
                      </label>
                    ) : (
                      <label className="font-medium text-black/80 py-2">
                        Outlet Name
                      </label>
                    )}

                    <input
                      {...register(
                        userLocation === "rider"
                          ? "riderName"
                          : userLocation === "business"
                          ? "companyName"
                          : "outletName",
                        { required: true }
                      )}
                      className="appearance-none block w-full bg-black/10 text-grey-darker rounded-lg h-10 px-4"
                      type="text"
                    />
                    {errors.outletName && (
                      <span className="text-sm text-red-500 mt-2">
                        Please fill out this field.
                      </span>
                    )}
                  </div>

                  <div className="w-full flex flex-col mb-3">
                    <label className="font-medium text-black/80 py-2">
                      Your Email*
                    </label>
                    <input
                      {...register("email", { required: true })}
                      className="appearance-none block w-full bg-black/10 text-grey-darker rounded-lg h-10 px-4"
                      type="email"
                      value={user?.email}
                    />
                    {errors.email && (
                      <span className="text-sm text-red-500 mt-2" id="error">
                        Email Field can not be empty.
                      </span>
                    )}
                  </div>
                </div>

                {/* Restaurant category and Discount section */}
                {userLocation === "partner" && (
                  <div className="md:flex mb-4 md:flex-row md:space-x-4 w-full text-sm">
                    <div className="w-full flex flex-col mb-3">
                      <label className="font-medium text-black/80 py-2">
                        Restaurant category
                      </label>
                      <input
                        {...register("RestaurantCategory", { required: true })}
                        className="appearance-none block w-full bg-black/10 text-grey-darker rounded-lg h-10 px-4"
                        type="text"
                      />
                      {errors.RestaurantCategory && (
                        <span className="text-sm text-red-500 mt-2">
                          Please fill out this field.
                        </span>
                      )}
                    </div>
                    <div className="w-full flex flex-col mb-3">
                      <label className="font-medium text-black/80 py-2">
                        Discounts on items
                      </label>

                      <select
                        className="block w-full bg-black/10 border-none font-normal rounded-lg h-10 px-4 md:w-full "
                        required="required"
                        {...register("discountOnItems", { required: true })}
                      >
                        {errors.discountOnItems && (
                          <span className="text-sm text-red-500 mt-2">
                            Complete this field.
                          </span>
                        )}

                        {restaurantDiscount.map((discount, i) => {
                          return (
                            <option
                              key={i}
                              className="bg-cyan-50 inline-flex p-5"
                              value={discount}
                            >
                              <span> {discount}</span>
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                )}

                {userLocation !== "rider" && (
                  <div className="md:flex mb-4 flex-row md:space-x-4 w-full text-sm">
                    <div className="mb-3 space-y-2 w-full text-sm">
                      <label className="font-medium text-black/80 py-2">
                        First Name
                      </label>
                      <input
                        {...register("firstName", { required: true })}
                        className="appearance-none block w-full bg-black/10 text-grey-darker rounded-lg h-10 px-4"
                        required="required"
                        type="text"
                      />
                      {errors.firstName && (
                        <span className="text-sm text-red-500 mt-2">
                          Field can not be empty.
                        </span>
                      )}
                    </div>
                    <div className="mb-3 space-y-2 w-full text-sm">
                      <label className="font-medium text-black/80 py-2">
                        Last Name
                      </label>
                      <input
                        {...register("lastName", { required: true })}
                        className="appearance-none block w-full bg-black/10 text-grey-darker rounded-lg h-10 px-4"
                        type="text"
                      />
                      {errors.lastName && (
                        <span className="text-sm text-red-500 mt-2" id="error">
                          Field can not be empty.
                        </span>
                      )}
                    </div>
                  </div>
                )}

                <div className="md:flex mb-4 flex-row md:space-x-4 w-full text-sm">
                  <div className="mb-3 space-y-2 w-full text-sm">
                    <label className="font-medium text-black/80 py-2">
                      Contact Number*
                    </label>
                    <input
                      {...register("contactNumber", {
                        required: "Field can not be empty",
                        pattern: {
                          value: /^(\+)?[0-9]*$/, // Allows an optional plus sign followed by numeric characters
                          message: "Please enter a valid contact number.",
                        },
                      })}
                      className="appearance-none block w-full bg-black/10 text-grey-darker rounded-lg h-10 px-4"
                      type="tel"
                    />

                    {errors.contactNumber && (
                      <span className="text-sm text-red-500 mt-2" id="error">
                        {errors.contactNumber.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="w-full text-sm">
                  {userLocation === "business" && (
                    <>
                      <p>
                        <label htmlFor="">Employee count</label>
                      </p>
                      <select className="block w-full bg-black/10 border-none font-normal rounded-lg mb-7 h-10 px-4 md:w-full ">
                        {employees.map((employee, i) => {
                          return (
                            <option
                              key={i}
                              className="bg-cyan-50 inline-flex p-5"
                              value={employee}
                            >
                              <span> {employee}</span>
                            </option>
                          );
                        })}
                      </select>
                    </>
                  )}

                  <SearchbarByLocation
                    {...register("locations")}
                    userLocation={userLocation}
                    selectedOption1={selectedOption1}
                    setSelectedOption1={setSelectedOption1}
                    selectedOption2={selectedOption2}
                    setSelectedOption2={setSelectedOption2}
                    selectedOption3={selectedOption3}
                    setSelectedOption3={setSelectedOption3}
                  />
                </div>

                <div className="flex-auto w-full mb-1 text-sm space-y-2">
                  {userLocation === "business" ? (
                    <label className="font-medium text-black/80 py-2">
                      Upload your offices catering corner image
                    </label>
                  ) : userLocation === "rider" ? (
                    <label className="font-medium text-black/80 py-2">
                      Upload your image with your ride
                    </label>
                  ) : (
                    <label className="font-medium text-black/80 py-2">
                      Upload your featured menu image
                    </label>
                  )}

                  <div>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-darkPink border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-black/80"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex justify-center text-sm text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-pink hover:text-darkPink"
                          >
                            <span className="">
                              {selectedFile
                                ? selectedFile.name
                                : "Upload a file"}
                            </span>
                            <input
                              id="file-upload"
                              type="file"
                              className="sr-only"
                              {...register("photo")}
                              onChange={handleFileChange}
                            />
                          </label>
                          <span className="pl-1 text-black/80">
                            {!selectedFile && "or drag and drop"}
                          </span>
                        </div>
                        <p className="text-xs text-black/80">
                          PNG, JPG, up to 5MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5  text-right md:space-x-3 md:block">
                  {isEmail?.role === userLocation ? (
                    <button
                      disabled
                      className="px-4 block w-full py-2 rounded-lg font-medium text-lg bg-slate-800 text-white"
                    >
                      Submit
                    </button>
                  ) : (
                    <button className="px-4 block w-full py-2 rounded-lg font-medium text-lg bg-pink text-white">
                      Submit
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerRegistration;

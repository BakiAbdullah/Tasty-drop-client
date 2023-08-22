import { useState } from "react";
import orderImg from "../../assets/asset/facility-card-images/boost-order.jpg";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";

const PartnerRegistration = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const location = useLocation();

  // console.log(location.state.from)
  //  num > 0 ? "Positive" : num < 0 ? "Negative" : num === 0 ? "Zero" : "Unknown";

  // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  // Specific user location in different routes for Form.
  const userLocation = location?.state.from;
  console.log(userLocation);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const locations = [
    "Barishal",
    "Chattogram",
    "Dhaka",
    "Khulna",
    "Rajshahi",
    "Rangpur",
    "Mymensingh",
    "Sylhet",
  ];

  const employees = ["50", "100", "150", "200", "250", "50"];

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
                    {userLocation === "rider" ? (
                      <label className="font-medium text-black/80 py-2">
                        Location of Rider
                      </label>
                    ) : userLocation === "business" ? (
                      <label className="font-medium text-black/80 py-2">
                        Number of employees
                      </label>
                    ) : (
                      <label className="font-medium text-black/80 py-2">
                        Location of Outlet
                      </label>
                    )}

                    <select
                      className="block w-full bg-black/10 border-none font-normal rounded-lg h-10 px-4 md:w-full "
                      required="required"
                      {...register(
                        userLocation === "rider"
                          ? "locationOfRider"
                          : userLocation === "business"
                          ? "employeeCount"
                          : "locationOfOutlet",
                        { required: true }
                      )}
                    >
                      {errors.locationOfOutlet && (
                        <span className="text-sm text-red-500 mt-2">
                          Complete this field.
                        </span>
                      )}

                      {userLocation === "business" ? (
                        <>
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
                        </>
                      ) : (
                        <>
                          {locations.map((location, i) => {
                            return (
                              <option
                                key={i}
                                className="bg-cyan-50 inline-flex p-5"
                                value={location}
                              >
                                <span> {location}</span>
                              </option>
                            );
                          })}
                        </>
                      )}
                    </select>
                  </div>
                </div>

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
                      Your Email*
                    </label>
                    <input
                      {...register("email", { required: true })}
                      className="appearance-none block w-full bg-black/10 text-grey-darker rounded-lg h-10 px-4"
                      type="email"
                    />
                    {errors.email && (
                      <span className="text-sm text-red-500 mt-2" id="error">
                        Email Field can not be empty.
                      </span>
                    )}
                  </div>
                </div>
                <div className="md:flex mb-4 flex-row md:space-x-4 w-full text-sm">
                  <div className="mb-3 space-y-2 w-full text-sm">
                    <label className="font-medium text-black/80 py-2">
                      Contact Number*
                    </label>
                    <input
                      {...register("contactNumber", {
                        required: " Field can not be empty",
                        pattern: {
                          value: /^[0-9]*$/, // Allow only numeric characters
                          message: "Please enter a valid contact number.",
                        },
                      })}
                      className="appearance-none block w-full bg-black/10 text-grey-darker rounded-lg h-10 px-4"
                      type="text"
                    />
                    {errors.contactNumber && (
                      <span className="text-sm text-red-500 mt-2" id="error">
                        {errors.contactNumber.message}
                      </span>
                    )}
                  </div>
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
                              name="file-upload"
                              type="file"
                              className="sr-only"
                              {...register("fileUpload")}
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
                  <button className="px-4 block w-full py-2 rounded-lg font-medium text-lg bg-pink text-white">
                    Submit
                  </button>
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

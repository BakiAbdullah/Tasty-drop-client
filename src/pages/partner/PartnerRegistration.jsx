import { useState } from "react";
import orderImg from "../../assets/asset/facility-card-images/boost-order.jpg";
import Button from "../../components/Button/Button";

const PartnerRegistration = () => {
  const [selectedFile, setSelectedFile] = useState(null);

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
  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-center bg-gray-50 py-40 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-500 bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${orderImg})`,
      }}
    >
      <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
      <div className="max-w-xl w-full space-y-8 p-10 bg-white rounded-xl shadow-lg z-10">
        <div className="grid gap-8 grid-cols-1">
          <div className="flex flex-col ">
            <div className="">
              <h2 className="font-semibold text-xl text-center mb-4">
                Interested? Fill in the form below to become our partner and
                increase your revenue!
              </h2>
              <p className="mb-2 mt-12">Please fill in below form:</p>
            </div>
            <div className="mt-5">
              <div className="form">
                <div className="md:flex mb-4 md:flex-row md:space-x-4 w-full text-sm">
                  <div className="w-full flex flex-col mb-3">
                    <label className="font-medium text-black/80 py-2">
                      Outlet Name
                    </label>
                    <input
                      className="appearance-none block w-full bg-black/10 text-grey-darker rounded-lg h-10 px-4"
                      type="text"
                    />
                  </div>
                  <div className="w-full flex flex-col mb-3">
                    <label className="font-medium text-black/80 py-2">
                      Location of Outlet
                    </label>

                    <select
                      className="block w-full bg-black/10 border-none font-normal rounded-lg h-10 px-4 md:w-full "
                      required="required"
                    >
                      {locations.map((location, i) => {
                        return (
                          <option
                            key={i}
                            className="bg-cyan-50 inline-flex p-5"
                            value=""
                          >
                            <span> {location}</span>
                          </option>
                        );
                      })}
                    </select>

                    <p className="text-sm text-red-500 hidden mt-3" id="error">
                      Please fill out this field.
                    </p>
                  </div>
                </div>
                <div className="md:flex mb-4 flex-row md:space-x-4 w-full text-sm">
                  <div className="mb-3 space-y-2 w-full text-sm">
                    <label className="font-medium text-black/80 py-2">
                      First Name
                    </label>
                    <input
                      className="appearance-none block w-full bg-black/10 text-grey-darker rounded-lg h-10 px-4"
                      required="required"
                      type="text"
                    />
                    <p className="text-red text-sm hidden">
                      Please fill out this field.
                    </p>
                  </div>
                  <div className="mb-3 space-y-2 w-full text-sm">
                    <label className="font-medium text-black/80 py-2">
                      Last Name
                    </label>
                    <input
                      className="appearance-none block w-full bg-black/10 text-grey-darker rounded-lg h-10 px-4"
                      required="required"
                      type="text"
                    />
                    <p className="text-red text-sm hidden">
                      Please fill out this field.
                    </p>
                  </div>
                </div>

                <div className="md:flex mb-4 flex-row md:space-x-4 w-full text-sm">
                  <div className="mb-3 space-y-2 w-full text-sm">
                    <label className="font-medium text-black/80 py-2">
                      Your Email*
                    </label>
                    <input
                      className="appearance-none block w-full bg-black/10 text-grey-darker rounded-lg h-10 px-4"
                      required="required"
                      type="text"
                    />
                    <p className="text-red text-sm hidden">
                      Please fill out this field.
                    </p>
                  </div>
                </div>
                <div className="md:flex mb-4 flex-row md:space-x-4 w-full text-sm">
                  <div className="mb-3 space-y-2 w-full text-sm">
                    <label className="font-medium text-black/80 py-2">
                      Contact Number*
                    </label>
                    <input
                      className="appearance-none block w-full bg-black/10 text-grey-darker rounded-lg h-10 px-4"
                      required="required"
                      type="text"
                    />
                    <p className="text-red text-sm hidden">
                      Please fill out this field.
                    </p>
                  </div>
                </div>

                <div className="flex-auto w-full mb-1 text-sm space-y-2">
                  <label className="font-medium text-black/80 py-2">
                    Upload your featured menu image
                  </label>
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
                              onChange={handleFileChange}
                            />
                          </label>
                          <span className="pl-1 text-black/80">
                            {!selectedFile && "or drag and drop"}
                          </span>
                        </div>
                        <p className="text-xs text-black/80">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
                  <Button buttonBlock={true} label={"Submit"}></Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerRegistration;


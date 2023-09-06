import { useState } from "react";
import Select from "react-select";
import Button from "../../Button/Button";

const ReserveTable = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    { value: "only me", label: "Only me" },
    { value: "couple", label: "Couple" },
    { value: "Party 3-4", label: "Party 3-4" },
    { value: "Party 5-6", label: "Party 5-6" },
    { value: "Party 7-10", label: "Party 7-10" },
    { value: "Party 11+", label: "Party 11+" },
  ];
  return (
    <div className="font-Fredoka bg-pink my-32 mx-3 md:mx-16 p-8  md:p-12 rounded-xl flex md:flex-row md:justify-between flex-col gap-7">
      <div>
        <p className="text-xl md:text-4xl font-bold text-white border-b-4 py-2 border-[#FFD40D]  md:w-[200px] tracking-widest">
          PLACE AN ORDER
        </p>
        <p className="text-white md:text-xl mt-4 md:mt-9">
          Discover our New Menu!
        </p>
      </div>
      <form>
        <div className="flex gap-5 md:flex-row flex-col">
          <div className="relative mb-6" data-te-input-wrapper-init>
            <input
              type="text"
              className="peer block min-h-[auto] w-full md:w-96 rounded border-0 bg-white px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-950 dark:placeholder:text-neutral-950 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlInput3"
              placeholder="Name"
            />
            <label
              htmlFor="exampleFormControlInput3"
              className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-400 transition-all duration-200 ease-out peer-focus:-translate-y-[.60rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-700 dark:peer-focus:text-primary">
              Name
            </label>
          </div>
          <div className="relative mb-6" data-te-input-wrapper-init>
            <input
              className="h-12 w-full outline-none rounded-md pt-7 md:w-52 px-6 py-3 font-bold"
              type="date"
              name=""
              id=""
            />
            <label className="pointer-events-none absolute left-6  text-xs font-bold -top-2 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-950 transition-all duration-200 ease-out peer-focus:-translate-y-[.60rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-950 dark:peer-focus:text-black">
              Date
            </label>
          </div>
          <div className="relative mb-6" data-te-input-wrapper-init>
            <input
              className="h-12 pt-7 w-full outline-none rounded-md md:w-52 px-6 py-3 font-bold"
              type="time"
              name=""
              id=""
            />
            <label className="pointer-events-none absolute left-6 text-xs font-bold -top-2 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-950 transition-all duration-200 ease-out peer-focus:-translate-y-[.60rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-950 dark:peer-focus:text-black">
              Time
            </label>
          </div>
        </div>
        <div>
          <div className="flex md:flex-row flex-col gap-5">
            <div className="relative mb-6" data-te-input-wrapper-init>
              <input
                type="text"
                className="peer block min-h-[auto] w-full md:w-96 rounded border-0 bg-white px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-950 dark:placeholder:text-neutral-950 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleFormControlInput3"
                placeholder="Phone Number"
              />
              <label
                htmlFor="exampleFormControlInput3"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-400 transition-all duration-200 ease-out peer-focus:-translate-y-[.60rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-700 dark:peer-focus:text-primary">
                Phone Number
              </label>
            </div>
            <div className="relative mb-6 w-full" data-te-input-wrapper-init>
              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                defaultInputValue="Only me"
                options={options}
                className="w-full"
              />
            </div>
          </div>
          <div className="flex justify-end">
            {/* <div className="text-left md:w-[40%] md:ps-7">
              <span></span>{" "}
              <p className="text-bold text-lg">
                Thanks for contacting us. We will get back to you as soon as
                possible.
              </p>
            </div> */}
            {/* <input
              type="submit"
              className=" mt-6 md:mt-0 bg-[#FFD40D] px-5 py-3 text-lg font-semibold rounded-md cursor-pointer"
              value="Place Order"
            /> */}
            {/* <Button label={'Our Menus'} colorRevert={false}></Button> */}
            <Button label={"Order Now"} colorRevert={true}></Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ReserveTable;

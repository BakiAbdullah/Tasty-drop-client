import CountUp from "react-countup";
const FoodType = () => {
  const Options = [
    {
      icon: "fa-bowl-food ",
      text: "Menu Types",
      count: 250,
    },
    {
      icon: "fa-cookie",
      text: "Different Origin",
      count: 150,
    },
    {
      icon: "fa-bowl-food",
      text: "Special Dish",
      count: 100,
    },
    {
      icon: "fa-truck",
      text: "Ready To Go",
      count: 50,
    },
  ];
  return (
    <div className=" lg:flex justify-evenly py-12 text-center">
      {Options.map((option, i) => (
        <div
          key={i}
          className=" p-10 rounded-md bg-slate-50 lg:w-[300px] cursor-pointer">
          <p>
            <i className={`${option.icon} text-6xl fa-solid`}></i>
          </p>
          <h3 className="text-3xl my-2 font-semibold">{option.text}</h3>
          <p className="font-medium text-3xl text-orange-600">
            <CountUp enableScrollSpy={true} end={option.count} />+
          </p>
        </div>
      ))}
    </div>
  );
};

export default FoodType;

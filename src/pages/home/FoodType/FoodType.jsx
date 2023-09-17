import CountUp from "react-countup";
const FoodType = () => {
  const Options = [
    {
      icon: "fa-utensils",
      text: "Menu Delivered",
      count: 350,
    },
    {
      icon: "fa-face-smile-wink",
      text: "Happ Customers",
      count: 150,
    },
    {
      icon: "fa-burger",
      text: "Menu Items",
      count: 180,
    },
    {
      icon: "fa-motorcycle",
      text: "Ready To Go",
      count: 50,
    },
  ];
  return (
    <div className="pt-28">
      <div className="w-[88vw] mx-auto h-[250px] lg:h-[400px]">
        <img
          className="h-full w-full object-cover"
          src="/faq-banner2.jpg"
          alt=""
        />
      </div>
      <div className="lg:flex justify-center gap-8 text-center">
        {Options.map((option, i) => (
          <div
            key={i}
            className="h-[220px] pt-6 w-[15vw] -mt-16 rounded-md bg-pink/80 text-white cursor-pointer relative">
            <div className="flex-col items-center justify-between">
              <p>
                <i className={`${option.icon} text-6xl fa-solid`}></i>
              </p>
              <p className="font-extrabold pt-3 text-5xl text-white">
                <CountUp enableScrollSpy={true} end={option.count} />
              </p>
            </div>
            {/* Menu Text */}
            <h3 className="text-xl font-semibold absolute bottom-2 right-2 left-2">
              {option.text}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodType;

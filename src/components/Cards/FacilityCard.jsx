const FacilityCard = ({ facilities }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto gap-2 my-10">
      {facilities.map((item, index) => (
        <div
          key={index}
          className="relative  mx-4 md:h-96 md:w-72 overflow-hidden group rounded-3xl md:mx-auto"
        >
          <img
            loading="lazy"
            className="h-full w-full object-cover scale-100 transition-transform group-hover:scale-110"
            src={item.image}
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black rounded-3xl opacity-80"></div>
          <p className="absolute inset-0 text-white font-bold text-2xl flex items-center justify-center px-8 opacity-100">
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FacilityCard;

const FacilityCard = ({ facilities }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-10 gap-8 md:mx-40 my-10">
      {facilities.map((item, index) => (
        <div key={index} className="relative h-96 w-72 overflow-hidden group rounded-3xl">
          <img
            className="h-full w-full object-cover transform scale-100 transition-transform group-hover:scale-110"
            src={item.image}
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black rounded-3xl opacity-80"></div>
          <p className="absolute inset-0 text-white font-bold text-2xl flex items-center justify-center px-8 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FacilityCard;

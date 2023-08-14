const FacilityCard = ({ facilities }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-10 gap-8 md:mx-40 my-10">
      {facilities.map((item, index) => (
        <div key={index} className="group">
          <img
            className="h-96 w-72 object-cover rounded-3xl"
            src={item.image}
            alt=""
          />
          <p className="font-bold text-2xl text-white mt-[-80px] mx-10">
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FacilityCard;

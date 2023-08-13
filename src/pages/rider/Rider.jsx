import deliveryMan from "../../assets/asset/Category Card/delivery-man.jpg";

const Rider = () => {
  
  return (
    <>
      <div className="md:flex">
        <div className="bg-pink md:w-1/2 text-white text-5xl md:text-8xl font-semibold flex flex-col justify-center md:p-20 p-10">
          <p>Chooseyour</p>
          <p>ownRide</p>
        </div>
        <div className="md:w-1/2">
          <img src={deliveryMan} alt=""/>
        </div>
      </div>
      <div className="bg-slate-50 p-10 md:p-20">
        <h3 className="text-pink text-center font-semibold text-5xl tracking-tighter">
          Delivering freedom to any doorstep
        </h3>
        <p className="my-5 md:mx-64 tracking-wide text-center">
          We enable the freedom to pursue your dreams and passions, providing
          the flexibility and means to make it happen. Whether you’re looking
          for a side gig or to achieve a personal dream, we’re here to help you
          achieve your goals at your own pace.
        </p>
      </div>
      <div>
        <p className="text-center text-3xl tracking-tighter text-sky-900 font-bold font-sans mt-20">
          {"LIFE'S ABOUT BALANCE, DECIDE WHEN TO WORK"}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-10 gap-8 md:mx-40 my-10">
          <div>
            <img
              className="h-96 w-72 object-cover rounded-3xl"
              src={deliveryMan}
              alt=""
            />
            <p className="font-bold text-2xl text-white mt-[-80px] mx-10">
              WORK WHEN YOU WANT TO
            </p>
          </div>
          <div>
            <img
              className="h-96 w-72 object-cover rounded-3xl"
              src={deliveryMan}
              alt=""
            />
            <p className="font-bold text-2xl text-white mt-[-80px] mx-10">
              WORK WHEN YOU WANT TO
            </p>
          </div>
          <div>
            <img
              className="h-96 w-72 object-cover rounded-3xl"
              src={deliveryMan}
              alt=""
            />
            <p className="font-bold text-2xl text-white mt-[-80px] mx-10">
              WORK WHEN YOU WANT TO
            </p>
          </div>
          <div>
            <img
              className="h-96 w-72 object-cover rounded-3xl"
              src={deliveryMan}
              alt=""
            />
            <p className="font-bold text-2xl text-white mt-[-80px] mx-10">
              WORK WHEN YOU WANT TO
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rider;

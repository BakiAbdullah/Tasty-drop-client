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
          <img src={deliveryMan} alt="" />
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
        <p className="text-center text-xl tracking-tighter">
          LIFE'S ABOUT BALANCE, DECIDE WHEN TO WORK WORK WHEN YOU WANT TO DEALS
          & DISCOUNTS TRANSPARENT
              </p>
              
      </div>
    </>
  );
};

export default Rider;

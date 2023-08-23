export const PartnersDashboard = () => {
  return (
    <div className="lg:max-w-5xl text-lg font-medium text-white grid lg:grid-cols-4 gap-5 justify-center items-center text-center max-w-3xl mx-auto">
      <div className="bg-peach hover:translate-y-1 duration-300 flex items-center justify-center shadow-sm rounded-md w-full h-[120px] p-3">
        <p className="">Revenue</p>
      </div>
      <div className="bg-peach hover:translate-y-1 duration-300 flex items-center justify-center shadow-sm rounded-md w-full h-[120px] p-3">
        <p className="">Customers</p>
      </div>
      <div className="bg-peach hover:translate-y-1 duration-300 flex items-center justify-center shadow-sm rounded-md w-full h-[120px] p-3">
        <p className="">Total Menus</p>
      </div>
      <div className="bg-peach hover:translate-y-1 duration-300 flex items-center justify-center shadow-sm rounded-md w-full h-[120px] p-3">
        <p className="">Orders</p>
      </div>

      <div className="col-span-2 flex items-center justify-center w-full h-[280px] rounded-md bg-ocean">
        <span>Orders Summary coming soon!</span>
      </div>
      <div className="col-span-2 flex items-center justify-center w-full h-[280px] rounded-md bg-ocean">
        <span>Orders Statics coming soon!</span>
      </div>
    </div>
  );
};

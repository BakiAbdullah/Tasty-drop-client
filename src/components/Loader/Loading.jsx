const Loading = () => {
    return (
      <div className="flex justify-center items-center h-[50vh] flex-col gap-">
        <div className="w-20 h-20 relative">
          <div className="animate-pulse absolute w-full h-full rounded-full bg-pink opacity-50"></div>
          <div className="animate-spin absolute w-full h-full rounded-full border-4 border-darkPink border-t-4 border-b-0"></div>
        </div>
        <p className="ml-2 text-lg font-semibold text-pink">Loading...</p>
      </div>
    );
  };
  
  export default Loading;
  
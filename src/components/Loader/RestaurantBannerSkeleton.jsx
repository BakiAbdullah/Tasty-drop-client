const RestaurantBannerSkeleton = () => {
  return (
    <div className="relative overflow-hidden w-full">
      {/* shimmer overlay */}
      <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/60 to-transparent" />
      {/* Image placeholder */}
      <div className="w-full h-[350px] bg-slate-300 rounded-lg shadow-lg mb-4 mx-8 "></div>

      {/* Outlet name */}
      <div className="h-5 md:h-7 bg-slate-300/90 rounded-md w-1/6 ml-4 md:ml-8 mb-3 mt-8"></div>

      {/* Stats placeholders */}
      <div className="flex flex-wrap  items-center gap-3 ml-4 md:ml-8 mb-4">
        <div className="w-20 h-5 bg-slate-200 rounded-full"></div>
        <div className="w-16 h-5 bg-slate-200 rounded-full"></div>
        <div className="w-28 h-5 bg-slate-200 rounded-full"></div>
        <div className="w-20 h-5 bg-slate-200 rounded-full"></div>
        <div className="w-20 h-5 bg-slate-200 rounded-full"></div>
      </div>

      {/* Menu items placeholder */}
      <div className="flex flex-wrap gap-2 ml-4 md:ml-8">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="w-20 h-5 bg-slate-200 rounded-full"></div>
        ))}
      </div>

      {/* Divider */}
      <div className="h-px bg-slate-200 mt-4 mb-8 ml-4 md:ml-8"></div>
    </div>
  );
};

export default RestaurantBannerSkeleton;

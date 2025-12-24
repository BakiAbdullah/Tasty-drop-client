const RestaurantCardSkeleton = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      {/* shimmer overlay */}
      <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/60 to-transparent" />

      {/* Image */}
      <div className="h-40 w-full rounded-xl bg-slate-200" />

      {/* Content */}
      <div className="mt-4 space-y-3">
        {/* Title */}
        <div className="h-4 w-3/4 rounded bg-slate-300" />

        {/* Category */}
        <div className="h-3 w-1/2 rounded bg-slate-200" />

        {/* Meta */}
        <div className="flex gap-2">
          <div className="h-3 w-1/4 rounded bg-slate-200" />
          <div className="h-3 w-1/4 rounded bg-slate-200" />
        </div>

        {/* Button */}
        <div className="mt-4 h-9 w-full rounded-full bg-slate-300" />
      </div>
    </div>
  );
};

export default RestaurantCardSkeleton;

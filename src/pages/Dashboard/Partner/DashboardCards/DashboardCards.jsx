const DashboardCards = ({ icon, title, value, percentage }) => {
  return (
    <div className="flex gap-5 items-center justify-left bg-white border-s-4 border-s-ocean hover:translate-y-1 duration-300 shadow-sm rounded-md w-full px-5 py-3 dark-content">
      <div className="bg-ocean rounded-full h-10 w-10 inline-flex items-center justify-center p-2">
        {icon}
      </div>

      <div className="flex-col my-2 items-center justify-center gap-1">
        <p className="text-slate-400 text-base dark-title">{title}</p>

        <div className="flex items-center space-x-2">
          <span className="font-bold text-xl dark-text">{value}</span>
          <span className="text-xs text-green-400 dark-text">{percentage}</span>
        </div>
      </div>
    </div>
  );
};

export default DashboardCards;

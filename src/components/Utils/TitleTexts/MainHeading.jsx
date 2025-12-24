const MainHeading = ({ title }) => {
  return (
    <div className="relative mt-10 lg:mt-28 mb-12 text-center lg:text-left group">
      <h2 className="text-2xl lg:text-4xl font-bold uppercase tracking-wider">
        {title}
      </h2>

      <div className="mt-3 h-1 w-12 bg-orange-500 rounded transition-all duration-300 group-hover:w-24 mx-auto lg:mx-0" />
    </div>
  );
};

export default MainHeading;

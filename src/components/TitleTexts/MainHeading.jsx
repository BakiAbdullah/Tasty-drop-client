const MainHeading = ({ title }) => {
  return (
    <div className="relative   mt-6 lg:mt-28 lg:mb-12 text-left">
      <p className="font-semibold uppercase lg:text-4xl  mb-2">
        <span className="">{title}</span>
      </p>
    </div>
  );
};

export default MainHeading;

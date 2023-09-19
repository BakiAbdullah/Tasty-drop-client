const MainHeading = ({ title }) => {
  return (
    <div className="relative mt-10 lg:mt-28 lg:mb-12 lg:text-left text-center">
      <p className="font-semibold uppercase lg:text-4xl text-2xl lg:mb-3 mb-8">
        <span className="">{title}</span>
      </p>
    </div>
  );
};

export default MainHeading;

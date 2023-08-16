const MainHeading = ({ title }) => {
  return (
    <div className="relative  mt-6 lg:mt-28 lg:mb-12 text-left">
      <p className="text-rosered uppercase lg:text-4xl  mb-2">
        <span className="ms-2">{title}</span>
      </p>
    </div>
  );
};

export default MainHeading;

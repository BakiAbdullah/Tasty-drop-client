const MainHeading = ({ title }) => {
  return (
    <div className="md:w-4/12 relative lg:w-4/12 mt-6 lg:mt-20 lg:mb-12 text-left">
      <p className="text-rosered uppercase lg:text-4xl  mb-2">
        <span className="ms-2">{title}</span>
      </p>
    </div>
  );
};

export default MainHeading;

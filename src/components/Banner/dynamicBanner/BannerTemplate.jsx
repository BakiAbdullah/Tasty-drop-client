const BannerTemplate = ({ bannerImage, heading, subHeading, description }) => {
  return (
    <div>
      <div className="md:flex ">
        <div className="bg-pink pt-28 md:w-1/2 text-white text-3xl md:text-5xl lg:text-7xl text-center md:text-left font-semibold flex flex-col justify-center md:p-20 p-10">
          {heading}
        </div>

        <div className="md:w-1/2">
          <img loading="lazy" src={bannerImage} alt="" />
        </div>
      </div>
      <div className="bg-slate-50 p-5 md:p-20">
        <h3 className="text-pink text-center font-semibold text-lg lg:text-3xl xl:text-5xl tracking-tighter">
          {subHeading}
        </h3>
        <p className="my-5 text-xs xl:text-base md:tracking-wide text-center">{description}</p>
      </div>
    </div>
  );
};

export default BannerTemplate;

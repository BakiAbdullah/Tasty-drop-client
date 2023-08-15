const BannerTemplate = ({ bannerImage, heading, subHeading, description }) => {
  return (
    <div>
      <div className="md:flex">
      <div className="bg-pink md:w-1/2 text-white text-3xl md:text-5xl lg:text-7xl font-semibold flex flex-col justify-center md:p-20 p-10">
  {heading}
</div>

        <div className="md:w-1/2">
          <img src={bannerImage} alt="" />
        </div>
      </div>
      <div className="bg-slate-50 p-10 md:p-20">
        <h3 className="text-pink text-center font-semibold text-5xl tracking-tighter">
          {subHeading}
        </h3>
        <p className="my-5 md:mx-64 tracking-wide text-center">{description}</p>
      </div>
    </div>
  );
};

export default BannerTemplate;

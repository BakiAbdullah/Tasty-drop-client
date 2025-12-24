const NewsletterSection = () => {
  return (
    <section
      className="relative bg-fixed bg-center bg-cover my-40"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836')",
      }}
    >
      

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-60 text-center text-white">
        <h2 className="text-3xl md:text-6xl font-extrabold mb-4">
          Hungry for Exclusive Deals?
        </h2>

        <p className="text-lg md:text-xl mb-8 text-orange-100">
          Subscribe to <span className="font-bold">Tasty Drop</span> and get
          special offers, discounts & food updates straight to your inbox.
        </p>

        {/* Form */}
        <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full px-5 py-3 rounded-full text-slate-900 focus:ring-orange-400"
          />

          <button
            type="submit"
            className="px-8 py-3 rounded-full bg-orange-500 hover:bg-orange-600 transition font-semibold text-white shadow-lg"
          >
            SUBSCRIBE
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;

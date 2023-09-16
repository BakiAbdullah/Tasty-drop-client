const TermsConditions = () => {
  return (
    <section className="pt-24">
      {/* Banner Section */}
      <div className="bg-[url('/faq-banner.jpg')] relative bg-cover h-[250px] lg:h-[400px]">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex justify-center items-center h-full">
          <div className="text-white  font-bold text-2xl lg:text-4xl uppercase">
            Terms & Conditions | Tasty Drop
          </div>
        </div>
      </div>

      {/* Terms & Conditions */}
      <div className="mx-auto w-full max-w-3xl text-sm text-justify pt-20 pb-36 text-black/80">
        <p className="my-4 text-sm">Published: 16 September 2023</p>

        <p className="uppercase font-bold ">Terms of use</p>

        <p className="mb-4">
          These Terms of Use (“Terms”) govern your use of the websites and
          mobile applications provided by Tasty Drop (or referred to as “us”)
          (collectively the “Platforms”). Please read these Terms carefully. By
          accessing and using the Platforms, you agree that you have read,
          understood and accepted the Terms including any additional terms and
          conditions and any policies referenced herein, available on the
          Platforms or available by hyperlink. If you do not agree or fall
          within the Terms, please do not use the Platforms.
        </p>

        <p className="uppercase font-bold ">What we do</p>
        <p className="mb-4">
          Through our Platforms, Tasty Drop links you to the vendors (“Vendors”)
          for you to order a variety of goods including prepared meals,
          non-prepared food and miscellaneous non-food items (hereinafter
          collectively referred to as Goods) to be delivered to you. When you
          place an order for Goods from our Vendors (“Order”), Tasty Drop acts
          as an agent on behalf of that Vendor to facilitate, process and
          conclude the order and subsequently for either us or the Vendor to
          deliver your Order to you. Vendors may be owned and operated by third
          party
        </p>
        <p className="uppercase font-bold">
          Use of the Platforms and TastyDrop Account
        </p>
        <p className="mb-4">
          You will need to register for a Tasty Drop account for you to use the
          Platform. When you register for a Tasty Drop account we will ask you
          to provide your personal information including a valid email address,
          a mobile phone number and a unique password. To purchase an Order,
          depending on which payment method you opt for, you may need to provide
          us with your credit card details. Your unique password should not be
          shared with anyone and you agree to keep it secret at all times. You
          are solely responsible for keeping your password safe. Save for cases
          of fraud or abuse which are not your fault, you accept that all Orders
          placed under your Tasty Drop account are your sole responsibility.
        </p>
        <p className="uppercase font-bold">Restriction</p>
        <p className="mb-4">
          The following is a non-exhaustive list of the types of conduct that
          are illegal or prohibited on the Platforms. Tasty Drop reserves the
          right to investigate and take appropriate legal action against anyone
          who, in Tasty Drops sole discretion, engages in any of the prohibited
          activities. Prohibited activities include, but are not limited to the
          following:
        </p>
        <p className="uppercase font-bold">
          Delivery, Pick-Up and Vendor Delivery{" "}
        </p>
        <p>
          {" "}
          Tasty Drop shall deliver your Order to the delivery address provided
          by You. You may choose for your Order to be delivered “ASAP” or
          scheduled for a specific time. An estimated delivery time will be
          provided to you in your email confirmation but delivery times shall
          vary depending on factors that are not controlled by us (e.g. order
          quantity, distance, time of day (peak periods), weather conditions,
          traffic conditions, etc.). You can view the remaining delivery time of
          an Order when you click on ‘My orders’ on the Platforms. You
          acknowledge that the delivery time we provide is only an estimate and
          Orders may arrive earlier or later. To ensure that you do not miss a
          delivery of an Order, you should ensure that either you or someone is
          at the delivery location to receive the Order once an Order is placed.
          If your Order contains Alcohol or Tobacco (if applicable) and you or
          the recipient is or appears to be below the legal age, or fails to
          provide a valid proof of ID, Tasty Drop reserves the right not to
          deliver your Order to you.
        </p>
        <p></p>
      </div>
    </section>
  );
};

export default TermsConditions;

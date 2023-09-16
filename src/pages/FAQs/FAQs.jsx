import DisclosureModal from "../../components/HeadlessUi/FAQClosures/DisclosureModal";

const faqItems = [
  {
    title: "What is your refund policy?",
    content:
      "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.",
  },
  {
    title: "How does the ordering process work?",
    content:
      "To place an order, visit our website or mobile app. Select your desired restaurant, browse the menu, add items to your cart, and proceed to checkout. You can choose delivery or pickup options and make payment securely online.",
  },
  {
    title: "What are the delivery hours?",
    content:
      "Our delivery hours vary by location and restaurant. You can check the delivery hours for each restaurant on our platform.",
  },
  {
    title: "How long does delivery take?",
    content:
      "Delivery times depend on factors like location, restaurant preparation time, and traffic. You'll receive an estimated delivery time during the checkout process.",
  },
  {
    title: "Can I track my order?",
    content:
      "Yes, you can track your order in real-time through our app. You'll receive updates on the order's status, from preparation to delivery.",
  },
  {
    title: "What payment methods do you accept?",
    content:
      "We accept various payment methods, including credit/debit cards, digital wallets, and cash on delivery (where available).",
  },
  {
    title: "What if my order is incorrect or missing items?",
    content:
      "If you receive an incorrect or incomplete order, please contact our customer support, and we'll assist you in resolving the issue promptly.",
  },
  {
    title: "What is your cancellation policy?",
    content:
      "You can cancel your order before it's been prepared by the restaurant. Depending on the restaurant's policy, there may be a cancellation fee.",
  },
];
const FAQs = () => {
  return (
    <section className="pt-24">
      {/* Banner Section */}
      <div className="bg-[url('/faq-banner.jpg')] relative bg-cover h-[250px] lg:h-[400px]">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex justify-center items-center h-full">
          <div className="text-white  font-bold text-2xl lg:text-5xl uppercase">
            FAQ | Tasty Drop
          </div>
        </div>
      </div>

      {/* Modal Section */}
      <div className="pt-10 lg:pt-16 pb-10 lg:pb-32">
      
        {faqItems.map((item,i)=> <DisclosureModal key={i} title={item.title} content={item.content}/>)}
      </div>
   
    </section>
  );
};

export default FAQs;

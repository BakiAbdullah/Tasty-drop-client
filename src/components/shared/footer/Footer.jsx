import { Link } from "react-router-dom";
import logo from "/logo.png";
import CustomModal from "../../Modal/CustomModal";
import { useState } from "react";
import { useEffect } from "react";
import Modal from 'react-modal';
import axios from "axios";

const Footer = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const linkUrl = 'https://poe.com/askReaxul'; //it will be changed with food related AI
  useEffect(() => {
    Modal.setAppElement('#root'); // Set the root element as the app element for modal accessibility
  }, []);

  const handleLinkClick = async (e) => {
    e.preventDefault(); // Prevent the default link behavior

    try {
      const response = await axios.get(linkUrl);
      setModalContent(response.data); // Set the content of the linked page
      setModalIsOpen(true);
    } catch (error) {
      console.error('Error fetching linked page:', error);
    }
  };
  return (
    <>
      <footer className="p-4 md:px-20 bg-lightGray dark:bg-gray-800 dark:text-gray-100">
        <div className="flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
          <div className="lg:w-1/3">
            <Link to="/" className="flex items-center justify-start">
              <span
                className={`text-2xl md:text-3xl font-Fredoka text-pink font-bold`}
              >
                TastyDrop
              </span>
              <img className="w-20 md:w-22" src={logo} alt="logo" />
            </Link>
            <p className="mt-1 text-pink">
              From Chefs Kitchen to <br /> Your Couch, Fast & Fresh Flavors
              Await!
            </p>
          </div>
          <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
            <div className="space-y-3">
              <h3 className="font-medium text-pink uppercase tracking-wide">
                Product
              </h3>
              <ul className="space-y-1">
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Features
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Integrations
                  </a>
                </li>
                <li>
                  <Link to={"/tastydrop-plus"} rel="noopener noreferrer">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to={"/faqs"} rel="noopener noreferrer">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-medium text-pink uppercase tracking-wide">
                Contact
              </h3>
              <ul className="space-y-1">
                <li>
                  <Link to={"/partners"} rel="noopener noreferrer">
                    Partner with Us
                  </Link>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Business
                  </a>
                </li>
                <li>
                <div>
      <a href={linkUrl} onClick={handleLinkClick} className="cursor-pointer">
        Live Chat
      </a>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Linked Page Modal"
      >
        <div className="p-4">
          <button className="float-right" onClick={() => setModalIsOpen(false)}>
            Close
          </button>
          <iframe
            title="Linked Page"
            srcDoc={modalContent} // Render the fetched content in an iframe
            frameBorder="0"
            width="100%"
            height="100%"
          ></iframe>
        </div>
      </Modal>
    </div>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-medium text-pink uppercase tracking-wide">
                Useful Links
              </h3>
              <ul className="space-y-1">
                <li>
                  <Link to={"/terms-conditions"} rel="noopener noreferrer">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link to={"/privacy-policy"} rel="noopener noreferrer">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to={"/privacy-policy"} rel="noopener noreferrer">
                    Cookies
                  </Link>
                </li>
                <li>
                  <Link to={"/tastydrop-plus"} rel="noopener noreferrer">
                    Subscription
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="flex justify-center gap-2 items-center">
                <img className="h-16 " src="/riderGear.jpg" alt="" />
                <span className="font-medium text-pink text-xs">
                  We enable the freedom to pursue your dreams
                </span>
              </div>
              <div className="flex justify-center gap-2 items-center">
                <img className="h-16" src="/team.jpg" alt="" />
                <span className="font-medium text-pink text-xs">
                  Find your next adventure in Tasty Drop
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-pink/40 py-5 lg:py-8">
          <div className="sm:flex justify-between items-center">
            <p className="text-sm text-center text-gray-500">
              Copyright &copy; 2023. Tasty Drop. All rights reserved.
            </p>
            <div className="flex items-center justify-center space-x-3">
              <img className="h-4" src="/visa.svg" alt="" />
              <img className="h-6" src="/mastercard.svg" alt="" />
              <img className="h-8" src="/stripe.svg" alt="" />
              <img className="h-6" src="/sslcommerz.png" alt="" />
              <img className="h-10" src="/bkash.svg" alt="" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

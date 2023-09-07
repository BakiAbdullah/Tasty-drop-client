import { useState } from "react";
import { useParams } from "react-router-dom";
import { FaCheckCircle, FaCopy } from "react-icons/fa";
import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  const { tranId } = useParams();
  const [isCopied, setIsCopied] = useState(false);

  // Function to copy the transaction ID to the clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(tranId);
    setIsCopied(true);

    // Reset the copied state after 3 seconds
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col items-center space-y-4">
        <FaCheckCircle className="text-6xl text-green-400" />
        <p className="text-3xl font-bold">Payment Successful</p>
        <div className="flex items-center space-x-2">
          <p className="text-xl">
            Your transaction ID:{" "}
            <span className="text-yellow-300" id="tranId">
              {tranId}
            </span>
          </p>
          <button
            onClick={copyToClipboard}
            className="text-purple-600 hover:text-purple-800 cursor-pointer"
            title="Copy to clipboard"
          >
            <FaCopy />
          </button>
          {isCopied && <span className="text-green-600 ml-2">Copied!</span>}
        </div>
        <Link
          to="/"
          className="bg-gradient-to-r from-purple-600 to-pink text-white px-6 py-3 rounded-full font-medium hover:bg-gradient-to-r hover:from-purple-700 hover:to-darkPink hover:text-white transition duration-300 ease-in-out"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccess;

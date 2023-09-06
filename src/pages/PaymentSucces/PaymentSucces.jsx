import { useParams } from "react-router-dom";


const PaymentSucces = () => {
    const { tranId } = useParams()
    return (
        <div className="h-screen w-full flex justify-center items-center">
            <p>Your payment success {tranId}</p>
        </div>
    );
};

export default PaymentSucces;
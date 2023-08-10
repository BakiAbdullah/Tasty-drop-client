import { Link } from "react-router-dom";


const Button = ({to,text}) => {
    return (
        <>
   <div className="font-Fredoka relative group px-7 " >
            <span className="border-[4px] absolute -top-[30px] group-hover:px-10 border-[#F3274C]  transition-all duration-300 px-12 py-5 rounded-xl" ></span>
            <span className="border-[4px] absolute -top-[30px] group-hover:px-10 border-[#F3274C] hover: px-12 py-5 rounded-xl" ></span>
            <span><button className="bg-[#F3274C] px-8 py-3 text-white rounded-xl font-semibold text-lg absolute left-0 -top-5 "><Link to={to}>{text}</Link></button></span>
     </div>
        </>
      
       
    );
};
// absolute -top-8
export default Button;
import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const FoodType = () => {

    const [count, setCount] = useState(false);

    return (
        <ScrollTrigger onEnter={()=> setCount(true)} onExit={()=> setCount(false)}>
            <div className="bg-slate-50 lg:flex justify-evenly py-12 text-center">
            <div className="hover:bg-white p-10 rounded-md">
                <p><i className="fa-solid fa-bowl-food text-6xl"></i></p>
                <h3 className="text-3xl my-2 font-semibold">Menu Types</h3>
                <p className="font-medium text-3xl text-orange-600">
                    {count && <CountUp start={0} end={250} duration={3} delay={0}></CountUp>}
                    +</p>
            </div>
            <div className="hover:bg-white p-10 rounded-md">
                <span><i className="fa-solid fa-utensils text-6xl"></i></span>
                <h3 className="text-3xl my-2 font-semibold">Different Origin</h3>
                <p className="font-medium text-3xl text-orange-600">
                    {count && <CountUp start={0} end={40} duration={3} delay={0}></CountUp>}
                    +</p>
            </div>
            <div className="hover:bg-white p-10 rounded-md">
                <span><i className="fa-solid fa-cookie text-6xl"></i></span>
                <h3 className="text-3xl my-2 font-semibold">Special Dish</h3>
                <p className="font-medium text-3xl text-orange-600">
                    {count && <CountUp start={0} end={35} duration={3} delay={0}></CountUp>}
                    +</p>
            </div>
            <div className="hover:bg-white p-10 rounded-md">
                <span><i className="fa-solid fa-truck text-6xl"></i></span>
                <h3 className="text-3xl my-2 font-semibold">Ready To Go</h3>
                <p className="font-medium text-3xl text-orange-600">
                    {count && <CountUp start={0} end={450} duration={3} delay={0}></CountUp>}
                    +</p>
            </div>
        </div>
        </ScrollTrigger>
    );
};

export default FoodType;
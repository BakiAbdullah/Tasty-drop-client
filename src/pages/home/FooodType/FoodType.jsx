import { FaBitbucket } from "react-icons/fa";


const FoodType = () => {
    return (
        <div className="bg-slate-50 flex justify-evenly py-24 text-center">
            <div>
                <p><FaBitbucket ></FaBitbucket></p>
                <h3>Menu Types</h3>
                <p>250+</p>
            </div>
            <div>
                <span></span>
                <h3>Different Origin</h3>
                <p>40+</p>
            </div>
            <div>
                <span></span>
                <h3>Special Dish</h3>
                <p>30+</p>
            </div>
            <div>
                <span></span>
                <h3>Ready To Go</h3>
                <p>480+</p>
            </div>
        </div>
    );
};

export default FoodType;
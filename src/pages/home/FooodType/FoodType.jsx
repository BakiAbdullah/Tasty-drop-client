
const FoodType = () => {
    return (
        <div className="bg-slate-50 lg:flex justify-evenly py-12 text-center">
            <div className="hover:bg-white p-10 rounded-md">
                <p><i className="fa-solid fa-bowl-food text-6xl"></i></p>
                <h3 className="text-3xl my-2 font-semibold">Menu Types</h3>
                <p className="font-medium text-3xl text-orange-600">250+</p>
            </div>
            <div className="hover:bg-white p-10 rounded-md">
                <span><i className="fa-solid fa-utensils text-6xl"></i></span>
                <h3 className="text-3xl my-2 font-semibold">Different Origin</h3>
                <p className="font-medium text-3xl text-orange-600">40+</p>
            </div>
            <div className="hover:bg-white p-10 rounded-md">
                <span><i className="fa-solid fa-cookie text-6xl"></i></span>
                <h3 className="text-3xl my-2 font-semibold">Special Dish</h3>
                <p className="font-medium text-3xl text-orange-600">30+</p>
            </div>
            <div className="hover:bg-white p-10 rounded-md">
                <span><i className="fa-solid fa-truck text-6xl"></i></span>
                <h3 className="text-3xl my-2 font-semibold">Ready To Go</h3>
                <p className="font-medium text-3xl text-orange-600">480+</p>
            </div>
        </div>
    );
};

export default FoodType;
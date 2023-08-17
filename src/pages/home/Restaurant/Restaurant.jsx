
const Restaurant = () => {
    return (
        <div className="pt-16 ">
            <div className="border-solid border-2 border-indigo-600 w-[75%] mt-5">
                <div>
                    <img className="w-full h-[400px]" src="https://assets.bonappetit.com/photos/610aa6ddc50e2f9f7c42f7f8/16:9/w_1920,c_limit/Savage-2019-top-50-busy-restaurant.jpg" alt="restaurant pic" />

                    <div>
                        <h3 className="text-3xl font-semibold mt-4 ml-8">Restaurant name</h3>

                        <div className="flex items-center ml-8 mt-3">
                            <p className="bg-red-500 px-3 text-white rounded-xl ">15% off</p>
                            <p className="ml-5"><i className="fa-solid fa-star text-yellow"></i> 4.5/5</p>
                            <p className="ml-5"><i className="fa-solid fa-truck-fast text-orange-500 text-xl"></i> Free Delivery</p>
                            <p className="ml-5 flex items-center"> <i className="fa-regular fa-clock text-orange-500 text-xl mr-1"></i> time</p>
                            <p className="ml-5 flex items-center"> <i className="fa-brands fa-intercom text-orange-500 text-xl mr-1"></i> services</p>
                        </div>

                        <div className="flex items-center ml-8 mt-3 text-slate-500 mb-6">
                            <p className="ml-">Chinese</p>
                            <li className="ml-4">Beverags</li>
                            <li className="ml-4">Pasta</li>
                            <li className="ml-4">Kacchi & Biryani</li>
                        </div>

                        <hr className="text-slate-300"></hr> <br />
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Restaurant;
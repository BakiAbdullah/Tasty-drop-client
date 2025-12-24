import React from "react";
import { ShoppingBag, Phone } from "lucide-react";

export default function DineInSection() {
  return (
    <section className="relative my-24 py-28 px-4 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50"></div>
      </div>

      <div className="w-[88vw] mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="text-white">
            {/* Subtitle */}
            <div className="inline-block mb-4">
              <span className="text-orange-500 font-semibold text-lg tracking-wide uppercase">
                Dine In Or Take Away
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Get Your Order 24/7 Right At Your{" "}
              <span className="text-orange-500">Doorsteps</span>
            </h2>

            {/* Description */}
            <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-xl">
              Plant-based diets may offer an advantage over those that are not
              plant-based with respect to prevention and management of
              diabetes...
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-600 transform hover:scale-105 transition-all shadow-lg">
                <ShoppingBag className="w-5 h-5" />
                Order Now
              </button>
              <button className="flex items-center gap-2 bg-white text-slate-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all shadow-lg">
                <Phone className="w-5 h-5" />
                Contact Us
              </button>
            </div>

            {/* Stats/Features */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/20">
              <div>
                <h3 className="text-3xl font-bold text-orange-400 mb-2">
                  24/7
                </h3>
                <p className="text-gray-300 text-sm">Delivery Service</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-orange-400 mb-2">
                  500+
                </h3>
                <p className="text-gray-300 text-sm">Restaurants</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-orange-400 mb-2">
                  50K+
                </h3>
                <p className="text-gray-300 text-sm">Happy Customers</p>
              </div>
            </div>
          </div>

          {/* Right Side - Delivery Person Image */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main Image */}
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&q=80"
                  alt="Food delivery person on bike"
                  className="w-full h-auto rounded-3xl shadow-2xl"
                />

                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-orange-500 rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-orange-400 rounded-full opacity-20 blur-3xl"></div>
              </div>

              {/* Floating Badge */}
              <div className="absolute top-8 -left-8 bg-white rounded-2xl shadow-2xl p-4 animate-bounce">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                    <ShoppingBag className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Fast Delivery</p>
                    <p className="text-lg font-bold text-gray-800">30 Min</p>
                  </div>
                </div>
              </div>

              {/* Floating Badge 2 */}
              <div className="absolute bottom-8 -right-8 bg-white rounded-2xl shadow-2xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-2xl">
                    ✓
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Orders Today</p>
                    <p className="text-lg font-bold text-gray-800">1,200+</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Circle Decoration */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
              <div className="w-96 h-96 border-4 border-orange-500/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

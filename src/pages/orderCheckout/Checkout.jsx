import { FaPen, FaTrash } from "react-icons/fa";
import Toggle from "../../components/Utils/Toggle";
import { useSelector } from "react-redux";

export const Checkout = () => {
  const { carts } = useSelector(state => state.carts)
  const subtotalPrice = carts.reduce((prev, curr) => prev + curr.menuItemPrice, 0)
  let vat = 0
  if (subtotalPrice > 100) {
    vat = subtotalPrice * 0.05.toFixed('2')
  }
  const totalPrice = subtotalPrice + vat
  return (
    <div className=" bg-slate-50  pt-32 ">
      {/* left part */}
      <div className=" flex flex-col lg:flex-row gap-14 justify-between max-w-5xl mx-auto px-5 lg:px-0  ">
        <div className="w-full">
          <div className="bg-white p-7 rounded-lg mb-5 space-y-5 ">
            <h1 className="div-title">Delivery Details</h1>
            <div className="flex items-center justify-between border-l-2 px-5 py-2 bg-slate-100">
              <span>
                <h1 className="text-sm">Contactless Delivery</h1>
                <p className="text-xs pt-1">
                  To keep you safe, the rider will place your order at your door
                  contactless-switcher
                </p>
              </span>
              <Toggle />
            </div>
            <p className="div-title">Delivery address</p>
            <div className="border border-orange-500 p-5 rounded-sm space-y-2 text-sm ">
              <p>
                <span>Feni, Mizan Road, block-2</span>
                <span className="inline-flex items-center gap-5 ml-4 justify-between">
                  <FaPen
                    size={20}
                    className="hover:cursor-pointer text-orange-500"
                  />
                  <FaTrash
                    size={20}
                    className="hover:cursor-pointer text-orange-500"
                  />
                </span>
              </p>
              <p>Dhaka</p>
              <p>Flat-20</p>
              <p>Note Rider: 2323</p>
            </div>
          </div>
          <form className="flex flex-col space-y-6 bg-white p-7 rounded-xl">
            <div className="flex items-center justify-between ">
              <h1 className="div-title">Personal Details</h1>
              <button>Cancel</button>
            </div>
            <label className="flex flex-col gap-2">
              <span className="text-xs ml-2">Email</span>
              <input
                className="border px-4 py-3 rounded-md border-slate-200 text-sm "
                type="text"
                placeholder="your email..."
                name="email"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-xs ml-2">First name</span>
              <input
                className="border px-4 py-3 rounded-md border-slate-200 text-sm"
                type="text"
                placeholder="First name"
                name="first_name"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-xs ml-2">Last name</span>
              <input
                className="border px-4 py-3 rounded-md border-slate-200 text-sm"
                type="text"
                placeholder="Last name..."
                name="last_name"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-xs ml-2">Mobile number</span>
              <input
                className="border px-4 py-3 rounded-md border-slate-200 text-sm"
                type="text"
                placeholder="Mobile number"
                name="number"
              />
            </label>

            <button className="btn-primary">Save</button>
          </form>

          {/* tips part */}
          <div className="mt-5 bg-white p-7 rounded-xl space-x-2">
            <span>
              <h1 className="div-title">Tip your rider</h1>
              <p className="text-sm pt-3">
                100% of the tips go to your rider, we don’t deduct anything from
                it.
              </p>
            </span>
            <span className="pt-5 block space-x-2 ">
              <button className="border border-slate-300 rounded-full p-2 text-xs">
                Not Now
              </button>
              <button className="border  border-slate-300 rounded-full p-2 text-xs">
                Tk 10
              </button>
              <button className="border border-slate-300 rounded-full p-2 text-xs">
                Tk 30
              </button>
              <button className="border border-slate-300 rounded-full p-2 text-xs">
                Tk 50
              </button>
            </span>
          </div>
        </div>

        {/* right part */}
        <div className="bg-white h-fit p-7 rounded-xl lg:w-[500px]">
          <div className="space-y-5">
            <span>
              <h1 className="div-title ">Your order from</h1>
              <p>Khana Pina hotel & Restaurant - Feni </p>
            </span>
            <span className="flex flex-col w-full items-center justify-between">
              {
                carts.map(items => <div className="flex justify-between w-full " key={items._id}>
                  <p>{items?.quantity} x {items?.menuItemName}</p>
                  <p>Tk {items.menuItemPrice}</p>
                </div>)
              }
            </span>
            <hr />
            <div className="space-y-4 text-sm text-slate-700">
              <span className="flex items-center justify-between">
                <h1>Subtotal</h1>
                <h1 className="text-lg font-bold">Tk {subtotalPrice}</h1>
              </span>
              <span className="flex items-center justify-between">
                <h1>Delivery Fee</h1>
                <h1> 55</h1>
              </span>
              <span className="flex items-center justify-between">
                <h1>+ Platform fee</h1>
                <h1>Tk {vat}</h1>
              </span>
              <span className="flex pt-5 justify-between">
                <span>
                  <h1 className="div-title">Total</h1>
                  <p>(incl. VAT)</p>
                </span>
                <h1 className="text-2xl font-bold">Tk {totalPrice}</h1>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

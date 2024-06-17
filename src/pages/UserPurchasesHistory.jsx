import { useContext } from "react";
import { AppContext } from "../App";
import { Link } from "react-router-dom";

export default function UserPurchasesHistory() {

  const {user} = useContext(AppContext);
  
  
  

  return ( <>
    <div className=" h-[90%] min-h-full py-0  " >
      <h2  className="mb-5 flex flex-row items-center justify-center p-10 text-4xl font-bold dark:text-white " style={{ direction: "rtl" }}>
        تاریخچه خرید {user?.firstName} {user?.lastName}
      </h2>
      <ul className="flex min-w-fit flex-col items-center justify-center space-y-5">
        {user.cart.length === 0 && <p className="p-10 text-xl font-bold">شما تابحال هیچ خریدی نداشته اید!</p>}
        {user?.cart?.map((cartItem) => (
          <li key={Math.random()} className=" relative w-3/4 ">
            {/* <CartItem item={cartItem} onClickTrash={onClickTrash} /> */}
            <div
              className={
                "flex cursor-pointer flex-row items-center justify-between space-y-2 bg-gray-50 p-2 hover:bg-[#DAFFA2] dark:bg-transparent dark:hover:bg-night-50 "
              }
            >
              <div className="flex  space-x-2 ">
                {/* Image */}
                <img className="h-24" src={cartItem.product.src} />
                <div className="space-y-2">
                  {/* Title & Description */}
                  <div className="font-bold dark:text-white">
                    {cartItem.product.title}
                  </div>
                  <div className="text-sm text-gray-400">
                    {cartItem.product.description}
                  </div>
                </div>
                {/* Price */}
                <div className="absolute right-20 top-10  ">
              
                  <div className=" right-20 font-bold dark:text-white">
                    x{cartItem.qty}
                  </div>
                </div>
              </div>

              <div className="flex justify-end pl-32">
               
              </div>
            </div>
          </li>
        ))}
          <Link
            to="/"
            type="button"
            className="h-34 w-88 btn-press-anim size-large mt-10 bg-black  p-5 text-white hover:bg-gray-900 active:bg-gray-700 dark:bg-white  dark:text-black"

            // className=" absolute bottom-8  focus:outline-none  focus:ring-4 focus:ring-[#DAFFA2] cursor-pointer space-y-2 bg-gray-950 text-white p-2 hover:bg-[#DAFFA2] hover:text-gray-950 dark:bg-transparent dark:hover:bg-night-50 "
            // onClick={handleClick}
          >
            بازگشت به صفحه اصلی
          </Link>
      </ul>
     
    </div>
   
  </>
);
}

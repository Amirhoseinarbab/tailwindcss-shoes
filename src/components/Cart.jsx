import { Link } from "react-router-dom";
import { CartItem } from "./CartItem";
export function Cart({ cartItems, onClickTrash }) {
  console.log(cartItems);
  return (
    <>
      <div className="relative min-h-full">
        <h2 className="mb-5 text-4xl font-bold dark:text-white ">Cart</h2>
        <ul className="space-y-5">
          {cartItems.map((cartItem) => (
            <li key={cartItem.product.id}>
              <CartItem item={cartItem} onClickTrash={onClickTrash} />
            </li>
          ))}
        </ul>
        {
          cartItems.length !== 0 && (
            <Link 
            to="/purchases"
              type="button"
              className="p-5 h-34 w-88 btn-press-anim size-large absolute  bottom-8  bg-black text-white hover:bg-gray-900 active:bg-gray-700 dark:bg-white  dark:text-black"

              // className=" absolute bottom-8  focus:outline-none  focus:ring-4 focus:ring-[#DAFFA2] cursor-pointer space-y-2 bg-gray-950 text-white p-2 hover:bg-[#DAFFA2] hover:text-gray-950 dark:bg-transparent dark:hover:bg-night-50 "
              // onClick={handleClick}
            >
             مشاهده ی فاکتور خرید
            </Link>
          )
        }
         {
          cartItems.length === 0 && (
            <div className="p-10 flex flex-row justify-center items-center  ">
              <p className="">
             😢 سبد خرید شما خالی است

              </p>
            </div>
          )
        }
      </div>
    </>
  );
}

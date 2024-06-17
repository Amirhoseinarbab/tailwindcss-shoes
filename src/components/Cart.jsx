import { Link } from "react-router-dom";
import { CartItem } from "./CartItem";
import { useContext } from "react";
import { AppContext } from "../App";
export function Cart({ cartItems, onClickTrash }) {
  const { user } = useContext(AppContext);

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
          {cartItems.length !== 0 && user !== null && (
            <Link
              to="/purchases"
              type="button"
              className="h-34 w-88 btn-press-anim size-large absolute bottom-8  bg-black  p-5 text-white hover:bg-gray-900 active:bg-gray-700 dark:bg-white  dark:text-black"

              // className=" absolute bottom-8  focus:outline-none  focus:ring-4 focus:ring-[#DAFFA2] cursor-pointer space-y-2 bg-gray-950 text-white p-2 hover:bg-[#DAFFA2] hover:text-gray-950 dark:bg-transparent dark:hover:bg-night-50 "
              // onClick={handleClick}
            >
              مشاهده ی فاکتور
            </Link>
          )}
          {user === null && (
            <Link
              to="/login"
              type="button"
              className="h-34 w-88 btn-press-anim size-large absolute bottom-8  bg-black  p-5 text-white hover:bg-gray-900 active:bg-gray-700 dark:bg-white  dark:text-black"

              // className=" absolute bottom-8  focus:outline-none  focus:ring-4 focus:ring-[#DAFFA2] cursor-pointer space-y-2 bg-gray-950 text-white p-2 hover:bg-[#DAFFA2] hover:text-gray-950 dark:bg-transparent dark:hover:bg-night-50 "
              // onClick={handleClick}
            >
              ابتدا وارد شوید
            </Link>
          )}
          {cartItems.length === 0 && (
            <div className="flex flex-row items-center justify-center p-10  ">
              <p className="">😢 سبد خرید شما خالی است</p>
            </div>
          )}
        </ul>
      </div>
    </>
  );
}

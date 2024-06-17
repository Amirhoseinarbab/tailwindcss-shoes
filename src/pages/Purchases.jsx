import { Link, useNavigate } from "react-router-dom";
import { CiTrash } from "react-icons/ci";
import { useContext } from "react";
import { AppContext } from "../App";
import toast, { Toaster } from "react-hot-toast";

export function Purchases({ cartItems, onClickTrash }) {
  const { user, setUser } = useContext(AppContext);
  const navigate = useNavigate();

  function handleUpdateCart() {

    setUser((user) => ({ ...user, cart: [...user.cart, ...cartItems] }));

    const data = {
      email: user.email,
      password: user.password,
      cart: cartItems,
    };
    console.log("🚀 ~ handleUpdateCart ~ data:", data);

    fetch("http://localhost:4000/update-cart-history", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        toast.success(data.message, {
          icon: "🎉",
          style: {
            background: "green",
            color: "white",
          },
          duration: 3000,
        });
      })
      .catch((error) => {
        toast.error(error.message, {
          icon: "🚫",
          style: {
            background: "red",
            color: "white",
          },
          duration: 3000,
        });
      });
    setTimeout(function () {
      navigate("/last-step");
    }, 3000);
  }

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.product.price * item.qty,
    0,
  );
  return (
    <>
      <Toaster />
      <div className=" h-[90%] min-h-full py-0  ">
        <h2 className="mb-5 flex flex-row items-center justify-center p-10 text-4xl font-bold dark:text-white ">
          فاکتور خرید شما
        </h2>
        <ul className="flex min-w-fit flex-col items-center justify-center space-y-5">
          {cartItems.map((cartItem) => (
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
                    <div className=" font-bold dark:text-white">
                      {cartItem.product.price}﷼
                    </div>
                    <div className=" right-20 font-bold dark:text-white">
                      x{cartItem.qty}
                    </div>
                  </div>
                </div>

                <div className="flex justify-end pl-32">
                  <button onClick={() => onClickTrash(cartItem.product.id)}>
                    <CiTrash size={25} className="text-black dark:text-white" />
                  </button>
                </div>
              </div>
            </li>
          ))}
          {cartItems.length === 0 && (
            <div className="flex flex-col items-center justify-center p-10  ">
              <p className="">😢 سبد خرید شما خالی است</p>
              <Link
                to="/"
                type="button"
                className="h-34 w-88 btn-press-anim size-large mt-10 bg-black  p-5 text-white hover:bg-gray-900 active:bg-gray-700 dark:bg-white  dark:text-black"

                // className=" absolute bottom-8  focus:outline-none  focus:ring-4 focus:ring-[#DAFFA2] cursor-pointer space-y-2 bg-gray-950 text-white p-2 hover:bg-[#DAFFA2] hover:text-gray-950 dark:bg-transparent dark:hover:bg-night-50 "
                // onClick={handleClick}
              >
                بازگشت به صفحه اصلی
              </Link>
            </div>
          )}
          {cartItems.length !== 0 && (
            <div className="fixed bottom-0 z-10 m-5 p-5">
              <p className=" p-5">مجموع {totalPrice} ﷼</p>

              <button
                // to="/last-step"
                // type="button"
                className="h-34 w-88 btn-press-anim size-large  bg-black   p-5 text-white hover:bg-gray-900 active:bg-gray-700 dark:bg-white  dark:text-black"
                onClick={handleUpdateCart}

                // className=" absolute bottom-8  focus:outline-none  focus:ring-4 focus:ring-[#DAFFA2] cursor-pointer space-y-2 bg-gray-950 text-white p-2 hover:bg-[#DAFFA2] hover:text-gray-950 dark:bg-transparent dark:hover:bg-night-50 "
                // onClick={handleClick}
              >
                خرید خود را تکمیل کنید
              </button>
            </div>
          )}
        </ul>
      </div>
    </>
  );
}

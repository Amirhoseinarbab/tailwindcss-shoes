import { Link } from "react-router-dom";
import { CiTrash } from "react-icons/ci";





export default function Purchases({ cartItems, onClickTrash }) {
    console.log(cartItems)
    const totalPrice = cartItems.reduce((total, item) => total + (item.product.price * item.qty), 0);
  return (
    <>
      <div className="relative min-h-full h-screen py-0  ">
        <h2 className="p-10 mb-5 text-4xl font-bold flex flex-row justify-center items-center dark:text-white ">فاکتور خرید شما</h2>
        <ul className="space-y-5 flex flex-col justify-center items-center min-w-fit" >
          {cartItems.map((cartItem) => (
            <li key={cartItem.product.id} className=" w-3/4 relative ">
              {/* <CartItem item={cartItem} onClickTrash={onClickTrash} /> */}
              <div
      className={
        "flex flex-row justify-between items-center cursor-pointer space-y-2 bg-gray-50 p-2 hover:bg-[#DAFFA2] dark:bg-transparent dark:hover:bg-night-50 "
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
        <div className="absolute top-10 right-20  ">

        <div className=" font-bold dark:text-white">
          {cartItem.product.price}$
        </div>
        <div className=" right-20 font-bold dark:text-white">
          x{cartItem.qty}
        </div>
        </div>
        
      </div>

      <div className="flex justify-end pl-32">
       
        <button onClick={() => onClickTrash(cartItem.product.id)}>
          <CiTrash
            size={25}
            className="text-black dark:text-white"
          />
        </button>
      </div>
    </div>
            </li>
          ))}
        </ul>
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
        {
          cartItems.length !== 0 && (
            <>
            <p className="mb-5">مجموع {totalPrice}</p>
            <Link 
            to="/user-informations"
            type="button"
            className="z-10 p-5 h-34 w-88 btn-press-anim size-large fix  bottom-0  bg-black text-white hover:bg-gray-900 active:bg-gray-700 dark:bg-white  dark:text-black"
            
            // className=" absolute bottom-8  focus:outline-none  focus:ring-4 focus:ring-[#DAFFA2] cursor-pointer space-y-2 bg-gray-950 text-white p-2 hover:bg-[#DAFFA2] hover:text-gray-950 dark:bg-transparent dark:hover:bg-night-50 "
            // onClick={handleClick}
            >
              خرید خود را تکمیل کنید
            </Link>
                </>
          )
        }
    </>
  )
}

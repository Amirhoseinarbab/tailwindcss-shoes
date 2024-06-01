import { Link } from "react-router-dom";

export default function Success() {
  return (
    <>
      <div className="w-100 h-100 flex flex-col items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="480"
          height="480"
          viewBox="0 0 48 48"
        >
          <path
            fill="#c8e6c9"
            d="M44,24c0,11-9,20-20,20S4,35,4,24S13,4,24,4S44,13,44,24z"
          ></path>
          <polyline
            fill="none"
            stroke="#4caf50"
            stroke-miterlimit="10"
            stroke-width="4"
            points="14,24 21,31 36,16"
          ></polyline>
        </svg>

        <div className="p-10 bg-gray-200 flex flex-col items-center justify-center">
            <p>🎉 🎉خرید شما با موفقیت انجام شد و به زودی به دستتان می رسد  🎉 🎉 </p>
      

        <Link
            to="/"
              type="button"
              className="mt-10 p-5 h-34 w-88 btn-press-anim size-large  bg-black text-white hover:bg-gray-900 active:bg-gray-700 dark:bg-white  dark:text-black"

              // className=" absolute bottom-8  focus:outline-none  focus:ring-4 focus:ring-[#DAFFA2] cursor-pointer space-y-2 bg-gray-950 text-white p-2 hover:bg-[#DAFFA2] hover:text-gray-950 dark:bg-transparent dark:hover:bg-night-50 "
              // onClick={handleClick}
            >
              بازگشت به صفحه اصلی
            </Link>
            </div>
      </div>
    </>
  );
}

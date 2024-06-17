import { TbShoppingBag } from "react-icons/tb";
import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../App";

export function Nav({ onClickShoppingBtn }) {
  const { user, setUser } = useContext(AppContext);

  const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);

  const navigate = useNavigate();

  return (
    <nav className="relative z-10 flex flex-wrap items-center justify-between">
      {/* Logo */}
      <a href="#">
        <NikeLogo className="h-20 w-20 dark:fill-white" />
      </a>

      {/* Burger button */}
      <button
        onClick={() => setIsMobileMenuShown(!isMobileMenuShown)}
        className="rounded-lg p-2 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 lg:hidden"
      >
        <RxHamburgerMenu size={25} />
      </button>

      {/* Menu list */}
      <div
        className={`${
          isMobileMenuShown === false && "hidden"
        } w-full lg:block lg:w-auto`}
      >
        {/* <ul className="flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 text-lg lg:flex-row lg:space-x-8 lg:border-none lg:bg-transparent lg:dark:text-white">
          {ROUTES.map((route, i) => {
            return (
              <li
                className={`${i === 0 ? "bg-blue-500 " : "hover:bg-gray-100"}
                    ${
                      (i == 3 || i == 4) && "lg:text-white"
                    } cursor-pointer rounded px-3 py-2 text-white lg:bg-transparent lg:text-blue-500 lg:hover:bg-transparent lg:hover:text-blue-500`}
                key={route}
              >
                <a>{route}</a>
              </li>
            );
          })}
        </ul> */}

        <ul className="flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 text-lg lg:flex-row lg:space-x-8 lg:border-none lg:bg-transparent lg:dark:text-white">
          <li className="false  cursor-pointer rounded bg-blue-500 px-3 py-2 text-white lg:bg-transparent lg:text-blue-500 lg:hover:bg-transparent lg:hover:text-blue-500">
            <a className="pl-8">صفحه اصلی</a>
          </li>
          {user === null && (
            <>
              <li
                onClick={() => navigate("/login")}
                className="false cursor-pointer rounded px-3 py-2 text-white hover:bg-gray-100 lg:bg-transparent lg:text-blue-500 lg:hover:bg-transparent lg:hover:text-blue-500"
              >
                <a>ورود</a>
              </li>
              <li
                onClick={() => navigate("/register")}
                className="false cursor-pointer rounded px-3 py-2 text-white hover:bg-gray-100 lg:bg-transparent lg:text-blue-500 lg:hover:bg-transparent lg:hover:text-blue-500"
              >
                <a>ثبت نام</a>
              </li>
            </>
          )}

          {user !== null && (
            <>
              
              <li
                onClick={() => navigate("/user-purchases-history")}
                className="false cursor-pointer rounded px-3 py-2 text-white hover:bg-gray-100 lg:bg-transparent lg:text-blue-500 lg:hover:bg-transparent lg:hover:text-blue-500"
              >
                <a className="pr-1"> مشاهده تاریخچه خرید</a>
              </li>

             <li
                onClick={() => setUser(null)}
                className="false cursor-pointer rounded px-3 py-2 text-white hover:bg-gray-100 lg:bg-transparent lg:text-white lg:hover:bg-transparent lg:hover:text-blue-500"
              >
                <a> خروج</a>
              </li>
             
            </>
          )}

          <li className="cursor-pointer rounded px-3 py-2 text-white hover:bg-gray-100 lg:bg-transparent lg:text-blue-500 lg:text-white lg:hover:bg-transparent lg:hover:text-blue-500">
            <a>درباره</a>
          </li>
          <li className="cursor-pointer rounded px-3 py-2 text-white hover:bg-gray-100 lg:bg-transparent lg:text-blue-500 lg:text-white lg:hover:bg-transparent lg:hover:text-blue-500">
            <a>تماس با ما</a>
          </li>
        </ul>
      </div>

      {/* Cart button */}
      <div
        onClick={onClickShoppingBtn}
        className="btn-press-anim fixed bottom-4 left-4 mr-1 lg:static lg:ml-7"
      >
        <div className="flex-center h-12 w-12 cursor-pointer rounded-full bg-white shadow-md">
          <TbShoppingBag />
        </div>
      </div>
    </nav>
  );
}

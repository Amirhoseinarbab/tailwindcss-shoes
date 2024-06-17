import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../App";

export default function LastStep() {
  const { setCartItems } = useContext(AppContext);

  return (
    <div
      className="flex h-screen items-center justify-center"
      style={{ direction: "rtl" }}
    >
      <div className="-lg  w-full max-w-lg bg-[#DAFFA2] p-8">
        <h2 className="mb-6 flex flex-row items-center justify-center text-2xl font-bold">
          اطلاعاتتان را تکمیل کنید
        </h2>
        <form>
          <div className="mb-6">
            <label
              htmlFor="phoneNum"
              className="mb-2 block font-bold text-gray-700"
              >
              شماره تماس
            </label>
            <input
                value="09130350774"
              type="number"
              id="phoneNum"
              className=" focus:shadow-outline w-full  appearance-none border px-3 py-2 leading-tight text-gray-700 focus:outline-none"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="receiveDate"
              className="mb-2 block font-bold text-gray-700"
            >
             تاریخ ارسال
            </label>
            <input
              type="date"
              id="receiveDate"
              className=" focus:shadow-outline w-full  appearance-none border px-3 py-2 leading-tight text-gray-700 focus:outline-none"
            />
          </div>

       
          <div className="mb-6">
            <label
              htmlFor="address"
              className="mb-2 block font-bold text-gray-700"
            >
              آدرس شما
            </label>
            <input
            value= " آبشار سوم خیابان مسرور پ 55"
              type="text"
              id="address"
              className=" focus:shadow-outline w-full  appearance-none border px-3 py-2 leading-tight text-gray-700 focus:outline-none"
            />
          </div>
          <br />
          <div className="pb-8">
            <p className="">*با شرایط و قوانین فروش موافقم</p>
          </div>

          <div className="flex items-center justify-between">
          
            <Link
              to="/success"
              type="submit"
              onClick={()=> setCartItems([])}
              className="h-34 w-88 btn-press-anim size-large bg-black   p-5 text-white hover:bg-gray-900 active:bg-gray-700 dark:bg-white  dark:text-black"
            >
              تکمیل فرم
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

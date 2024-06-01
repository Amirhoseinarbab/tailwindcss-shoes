import { Link } from "react-router-dom";

export default function UserData() {
  return (
    <div
      className="flex h-screen items-center justify-center"
      style={{ direction: "rtl" }}
    >
      <div className="-lg  w-full max-w-lg bg-[#DAFFA2] p-8">
        <h2 className="mb-6 flex flex-row items-center justify-center text-2xl font-bold">
          اطلاعاتتان را وارد کنید
        </h2>
        <form>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="mb-2 block font-bold text-gray-700"
            >
              نام
            </label>
            <input
              type="text"
              id="name"
              className=" focus:shadow-outline w-full  appearance-none border px-3 py-2 leading-tight text-gray-700 focus:outline-none"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="name"
              className="mb-2 block font-bold text-gray-700"
            >
              نام خانوادگی
            </label>
            <input
              type="text"
              id="name"
              className=" focus:shadow-outline w-full  appearance-none border px-3 py-2 leading-tight text-gray-700 focus:outline-none"
            />
          </div>
          <br />
          <br />

          <div className="mb-6">
            <label
              htmlFor="email"
              className="mb-2 block font-bold text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className=" focus:shadow-outline w-full  appearance-none border px-3 py-2 leading-tight text-gray-700 focus:outline-none"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="mb-2 block font-bold text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className=" focus:shadow-outline w-full  appearance-none border px-3 py-2 leading-tight text-gray-700 focus:outline-none"
            />
          </div>
          <br />
          <br />

          <div className="mb-6">
            <label
              htmlFor="name"
              className="mb-2 block font-bold text-gray-700"
            >
              آدرس شما
            </label>
            <input
              type="text"
              id="name"
              className=" focus:shadow-outline w-full  appearance-none border px-3 py-2 leading-tight text-gray-700 focus:outline-none"
            />
          </div>
          <br />
          <div className="pb-8">
            <p className="">*پرداخت تنها درب منزل</p>
            <p className="">*با شرایط و قوانین فروش موافقم</p>
          </div>

          <div className="flex items-center justify-between">
          
            <Link
              to="/success"
              type="submit"
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

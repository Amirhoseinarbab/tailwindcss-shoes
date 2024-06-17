import { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../App";

export const Register = () => {
  const { setUser } = useContext(AppContext);

  const [email, setEmail] = useState("ali@example.com");
  const [password, setPassword] = useState("123");
  const [name, setName] = useState("ali");
  const [lastName, setLastName] = useState("arbab");
  const [address, setAddress] = useState("تهران خبالان آزادی پ 10");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      email: email,
      password: password,
      firstName: name,
      lastName: lastName,
      address: address,
    };

    fetch("http://localhost:4000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        toast.success(data.message, {
          icon: "🔥",
          style: { background: "green", color: "white" },
          duration: 3000,
        });
        setUser(data.user);
        setTimeout(function () {
          navigate("/");
        }, 3000);
      })
      .catch((error) => {
        toast.error(error.message, {
          duration: 3000,
        });
      });
  };

  return (
    <>
      <Toaster />
      <div
        className="flex h-screen items-center justify-center"
        style={{ direction: "rtl" }}
      >
        <div className="-lg  w-full max-w-lg bg-[#DAFFA2] p-8">
          <h2 className="mb-6 flex flex-row items-center justify-center text-2xl font-bold">
            ثبت نام کنید
          </h2>
          <form onSubmit={handleSubmit}>
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
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="lastName"
                className="mb-2 block font-bold text-gray-700"
              >
                نام خانوادگی
              </label>
              <input
                type="text"
                id="lastName"
                className=" focus:shadow-outline w-full  appearance-none border px-3 py-2 leading-tight text-gray-700 focus:outline-none"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
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
                onChange={(e) => setEmail(e.target.value)}
                value={email}
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
                onChange={(e) => setPassword(e.target.value)}
                value={password}
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
                type="text"
                id="address"
                className=" focus:shadow-outline w-full  appearance-none border px-3 py-2 leading-tight text-gray-700 focus:outline-none"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
              />
            </div>
            <br />
            <br />

            <div className="pb-8">
              <p className="">*با شرایط و قوانین فروش موافقم</p>
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="h-34 w-88 btn-press-anim size-large bg-black   p-5 text-white hover:bg-gray-900 active:bg-gray-700 dark:bg-white  dark:text-black"
              >
                ثبت نام
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

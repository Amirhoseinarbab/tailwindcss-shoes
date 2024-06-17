import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import { Home } from "./pages/Home";
import { createContext, useEffect, useState } from "react";
import { SHOE_LIST_FA } from "./constant";
import Success from "./pages/Success";
import { Purchases } from "./pages/purchases";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import UserPurchasesHistory from "./pages/UserPurchasesHistory";
import LastStep from "./pages/LastStep";



export const AppContext = createContext()

export function App() {
  const [currentShoe, setCurrentShoe] = useState(SHOE_LIST_FA[0]);
  const [cartItems, setCartItems] = useState([
    
      // {
      //   product: {
      //     id: 2,
      //     src: "/src/assets/n2-min.png",
      //     className: "bg-[#DDCEFD]",
      //     title: "Nike Air Vapor",
      //     description:
      //       "Nike Air Vapor یک کفش براق و شیک است که برای هر موقعیتی مناسب است. این کفش مناسب برای هر سبک زندگی فعال است.",
      //     price: 100,
      //   },
      //   qty: "1",
      //   size: "45",
      // }
    
]);


  const [user, setUser] = useState( null
  //   {
  //   email: "ali@example.com",
  //   password: "123",
  //   firstName: "ali",
  //   lastName: "arbab",
  //   address: "تهران خبالان آزادی پ 10",
  //   cart: [
  //     {
  //       product: {
  //         id: 1,
  //         src: "/src/assets/n1-min.png",
  //         className: "bg-[#EEFFA4]",
  //         title: "Nike Air Max 270",
  //         description:
  //           "نایک ایر مکس 270 یک کفش سبک زندگی است که با شیب رنگی پر جنب و جوش خود مطمئناً سرها را برمی انگیزد.",
  //         price: 160,
  //       },
  //       qty: "3",
  //       size: "45",
  //     },
  //     {
  //       product: {
  //         id: 2,
  //         src: "/src/assets/n2-min.png",
  //         className: "bg-[#DDCEFD]",
  //         title: "Nike Air Vapor",
  //         description:
  //           "Nike Air Vapor یک کفش براق و شیک است که برای هر موقعیتی مناسب است. این کفش مناسب برای هر سبک زندگی فعال است.",
  //         price: 100,
  //       },
  //       qty: "1",
  //       size: "45",
  //     },
  //   ],
  // }
);


  useEffect(() => {
    const isDarkMode = localStorage.getItem("isDarkMode");
    if (isDarkMode === "true") {
      window.document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    window.document.documentElement.classList.toggle("dark");
    localStorage.setItem(
      "isDarkMode",
      window.document.documentElement.classList.contains("dark"),
    );
  };

  const removeFromCart = (productId) => {
    const updatedCartItems = [...cartItems];
    const existingItemIndex = cartItems.findIndex(
      (item) => item.product.id === productId,
    );
    updatedCartItems.splice(existingItemIndex, 1);
    setCartItems(updatedCartItems);
  };
  const addToCart = (product, qty, size) => {
    if (qty && size) {
      const updatedCartItems = [...cartItems];
      const existingItemIndex = cartItems.findIndex(
        (item) => item.product.id === product.id,
      );
      if (existingItemIndex > -1) {
        updatedCartItems[existingItemIndex].qty = qty;
        updatedCartItems[existingItemIndex].size = size;
      } else {
        updatedCartItems.push({ product, qty, size });
      }

      setCartItems(updatedCartItems);
    }
  };

  //   return (
  //     <div className="animate-fadeIn p-10 dark:bg-night xl:px-24 noto-kufi-arabic">
  //       <Nav
  //         onClickShoppingBtn={() => setIsSidebarOpen(true)}
  //       />
  //       <ShoeDetail shoe={currentShoe} onClickAdd={addToCart} />
  //       <NewArrivalsSection items={SHOE_LIST_FA} onClickCard={setCurrentShoe} />
  //       <Sidebar
  //         isOpen={isSidebarOpen}
  //         onClickClose={() => setIsSidebarOpen(false)}
  //       >
  //         <Cart cartItems={cartItems} onClickTrash={removeFromCart} />
  //       </Sidebar>
  //       <div className=" fixed bottom-4 right-4">
  //         <button
  //           onClick={toggleDarkMode}
  //           className="rounded-full bg-night-50 px-4 py-2 text-white shadow-lg dark:bg-white dark:text-night"
  //         >
  //           <BiSun className="hidden dark:block" />
  //           <BiMoon className="dark:hidden" />
  //         </button>
  //       </div>
  //     </div>

  // );
  return (
    <AppContext.Provider value={{user , setUser , setCartItems}}>

    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route index element={<Test />} /> */}

        <Route
          index
          element={
            <Home
            currentShoe={currentShoe}
            setCurrentShoe={setCurrentShoe}
            cartItems={cartItems}
              setCartItems={setCartItems}
              addToCart={addToCart}
              toggleDarkMode={toggleDarkMode}
              onClickTrash={removeFromCart}
              />
              }
              />
        <Route
          path="/purchases"
          element={
            <Purchases
            currentShoe={currentShoe}
            setCurrentShoe={setCurrentShoe}
            cartItems={cartItems}
            setCartItems={setCartItems}
            addToCart={addToCart}
            onClickTrash={removeFromCart}
            />
            }
            />
        <Route path="/user-purchases-history" element={<UserPurchasesHistory />} />
        <Route path="/last-step" element={<LastStep />} />
        <Route path="/success" element={<Success />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
            </AppContext.Provider>
  );
}

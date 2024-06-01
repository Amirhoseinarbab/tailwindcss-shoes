import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import { Home } from "./pages/Home";
import Purchases from "./pages/purchases";
import { useEffect, useState } from "react";
import { SHOE_LIST_FA } from "./constant";
import UserData from "./pages/UserData";
import Success from "./pages/Success";

export function App() {
  const [currentShoe, setCurrentShoe] = useState(SHOE_LIST_FA[0]);
  const [cartItems, setCartItems] = useState([]);

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
    console.log("***", productId);
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
return(
  
  
  <Routes>
      <Route path="/" element={<Layout />} >

      {/* <Route index element={<Test />} /> */}

      <Route index element={<Home currentShoe={currentShoe} setCurrentShoe={setCurrentShoe} cartItems={cartItems} setCartItems={setCartItems} addToCart={addToCart} toggleDarkMode={toggleDarkMode} onClickTrash={removeFromCart}/>} />
      <Route path="/purchases" element={<Purchases currentShoe={currentShoe} setCurrentShoe={setCurrentShoe} cartItems={cartItems} setCartItems={setCartItems} addToCart={addToCart}  onClickTrash={removeFromCart}/>} />
    <Route path="/user-informations" element={<UserData />} />
      <Route path="/success" element={<Success />} />
    </Route>
    </Routes>
      
    )
  }
  

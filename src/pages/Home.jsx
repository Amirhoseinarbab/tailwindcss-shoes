import {  useState } from "react";
import { Nav } from "../components/Nav";
import { NewArrivalsSection } from "../components/NewArrivalsSection";
import { ShoeDetail } from "../components/ShoeDetail";
import { Sidebar } from "../components/Sidebar";
import { SHOE_LIST_FA } from "../constant";
import { Cart } from "../components/Cart";
import { BiMoon, BiSun } from "react-icons/bi";



export const Home = ({currentShoe, setCurrentShoe , addToCart , cartItems ,onClickTrash ,toggleDarkMode}) => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
 console.log(cartItems)

  return (
    <>
      <Nav onClickShoppingBtn={() => setIsSidebarOpen(true)} />
      <ShoeDetail shoe={currentShoe} onClickAdd={addToCart} />
      <NewArrivalsSection items={SHOE_LIST_FA} onClickCard={setCurrentShoe} />
      <Sidebar
        isOpen={isSidebarOpen}
        onClickClose={() => setIsSidebarOpen(false)}
      >
        <Cart cartItems={cartItems} onClickTrash={onClickTrash} />
      </Sidebar>
      <div className=" fixed bottom-4 right-4">
        <button
          onClick={toggleDarkMode}
          className="rounded-full bg-night-50 px-4 py-2 text-white shadow-lg dark:bg-white dark:text-night"
        >
          <BiSun className="hidden dark:block" />
          <BiMoon className="dark:hidden" />
        </button>
      </div>
    </>
  );
};

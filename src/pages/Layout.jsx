import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      
      <div className="animate-fadeIn p-10 dark:bg-night xl:px-24 noto-kufi-arabic ">
    <Outlet/>
  </div>

    </>
    
  )
  
}

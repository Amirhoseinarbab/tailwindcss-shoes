export function Sidebar({ children, isOpen, onClickClose }) {
  return (
    <div>
      <div
        className={`${
          isOpen ? "translate-x-0" : "translate-x-full"
        } fixed right-0  top-0 z-50 h-screen w-full transform overflow-y-auto bg-white p-5
          shadow-lg transition duration-300 dark:bg-night md:w-[50%]
        lg:w-[35%]`}
      >
        <button
          className="z-11 absolute right-4 top-4 h-20 w-20 p-2 font-bold text-black dark:text-white"
          onClick={onClickClose}
        >
          X
        </button>
        {children}
      </div>
      {isOpen && (
        <div
          className="fixed left-0 top-0 z-20 h-full w-full bg-black opacity-50"
          onClick={onClickClose}
        />
      )}
    </div>
  );
}

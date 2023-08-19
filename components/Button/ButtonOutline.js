import React from "react";

function ButtonOutline({ children, addClass, ...props }) {
  return (
    <button
      className={
        "w-full font-medium tracking-wide py-2 px-5 sm:px-8 border border-orange-500 text-orange-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-orange-500 hover:text-neutral-100 transition-all hover:shadow-orange " +
        addClass
      }
      {...props}
    >
      {children}
    </button>
  );
}

export default ButtonOutline;

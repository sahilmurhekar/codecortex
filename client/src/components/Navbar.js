import React from "react";

export function NavbarContainer({ children }) {
  return (
    <nav
      className="w-1/3 hidden md:flex justify-around items-center bg-[#0a0a0a] p-3 rounded-full  h-14 z-10"
      style={{
        boxShadow: "0 0 10px 2px rgba(30, 58, 138, 0.7)", // Equivalent to shadow-blue-900/70
      }}
    >
      {children}
    </nav>
  );
}

export function NavItem({ children, onClick }) {
  return (
    <button
      className="text-white no-underline text-base font-light px-4 py-1 rounded-full transition-colors duration-300 ease-in-out hover:bg-white/10 focus:bg-[#3665B5]"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export function RegisterButton({ href, children }) {
  return (
    <a
      href={href}
      className="m-2 text-white no-underline text-lg p-2.5 rounded-xl transition-colors duration-300 ease-in-out hover:bg-white/10 focus:bg-[#3665B5] "
    >
      {children}
    </a>
  );
}

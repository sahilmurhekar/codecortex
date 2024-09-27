export function TeamCard({ children }) {
  return (
    <div
      className="my-9 text-blue-400 font-bold flex justify-center items-center text-center text-xl rounded-lg p-5 bg-black flex-col w-40 h-40 m-1.5 transition-colors duration-300 ease-in-out hover:bg-gray-900 cursor-pointer"
      style={{
        boxShadow: "0 0 10px 1px rgba(30, 58, 138, 0.7)", // Equivalent to shadow-blue-900/70
      }}
    >
      {children}
    </div>
  );
}

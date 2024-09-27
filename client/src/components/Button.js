export function Button({ className, what, onClick, extras }) {
  return (
    <button
      className={`bg-gradient-to-r from-start to-end font-light px-4 py-2 rounded-md  transform transition-transform duration-300 hover:-translate-y-2 ${className} text-white ${extras}`}
      onClick={onClick}
    >
      {what}
    </button>
  );
}

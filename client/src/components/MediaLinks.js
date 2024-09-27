export function LinksContainer({ children }) {
  return (
    <div className="bg-transparent border-b border-solid border-phcolor flex items-center justify-center p-4 gap-4  w-[240px] h-14 text-white text-2xl">
      {children}
    </div>
  );
}

export function LinkItem({ href, children }) {
  return (
    <a href={href} target="blank">
      {children}
    </a>
  );
}

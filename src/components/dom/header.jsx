export default function Header({ children }) {
  return (
    <>
      <div className="border-b-2 border-black fixed items-center top-0 w-full h-20">
        {children}
      </div>
    </>
  );
}

export default function Header({ children }) {
  return (
    <>
      <div className="fixed items-center top-0 w-full h-20">{children}</div>
    </>
  );
}

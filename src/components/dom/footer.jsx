//make footer component and export it
export default function Footer({ children }) {
  return (
    <>
      <div className=" fixed bottom-0 w-full h-20 flex items-center	">
        {children}
      </div>
    </>
  );
}

import Image from "next/image";

//make header logo component and export it
export default function HeaderLogo() {
  return (
    <>
      <div className="flex flex-row items-center justify-center w-20 h-20 bg-black">
        <Image
          src="/img/logo.svg"
          alt="logo"
          width={100}
          height={100}
          className=""
        />
      </div>
    </>
  );
}

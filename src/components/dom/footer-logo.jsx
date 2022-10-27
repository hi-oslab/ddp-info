import Image from "next/image";

export default function FooterLogo() {
  return (
    <>
      <div className="flex m-8 fixed bottom-0 bg-white px-4 right-0 w-fit h-fit">
        <Image
          src="/img/ddplogo.png"
          alt="footer-logo"
          fill="intrinsic"
          width={120}
          height={60}
        />
      </div>
    </>
  );
}

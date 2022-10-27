import Image from "next/image";

export default function FooterLogo() {
  return (
    <>
      <div className="flex m-8 fixed bottom-0 right-0 w-fit h-fit">
        <Image
          src="/img/footer-logo.svg"
          alt="footer-logo"
          fill="intrinsic"
          width={150}
          height={500}
        />
      </div>
    </>
  );
}

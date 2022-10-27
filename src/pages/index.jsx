import dynamic from "next/dynamic";
import Object from "@/components/canvas/Object";
import Header from "@/components/dom/header";
import HeaderLogo from "@/components/dom/header-logo";
import Footer from "@/components/dom/footer";
import FooterLogo from "@/components/dom/footer-logo";
import { useRouter } from "next/router";
import Image from "next/image";
// Dynamic import is used to prevent a payload when the website start that will include threejs r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49

// dom components goes here
const Page = (props) => {
  const router = useRouter();

  return (
    <>
      <Header>
        <button
          type="button"
          onClick={() => router.reload()}
          className="flex text-white p-8 h-full text-center text-white text-3xl hover:underline decoration-wavy"
        ></button>
        <headerLogo></headerLogo>
      </Header>

      <div className="absolute grid justify-center items-center w-screen h-screen px-40 ">
        {/* <div className="w-fit shadow-2xl">
          <Image
            src="/img/poster.png"
            alt="Picture of the author"
            width={391}
            height={552}
          />
        </div> */}
        <div className="w-fit place-self-center bg-[rgba(0,0,0,0.8)] rounded-xl">
          <Image
            src="/img/300ppi/osl.png"
            alt="OSL"
            width={1300}
            height={360}
          />
        </div>
        <div className="grid  w-full grid-cols-2 grid-rows-1 gap-x-20">
          <div className="w-fit bg-[rgba(0,0,0,0.8)] rounded-xl">
            <Image
              src="/img/300ppi/mxs.png"
              alt="MXS"
              width={864}
              height={360}
            />
          </div>
          <div className="w-fit bg-[rgba(0,0,0,0.8)] rounded-xl">
            <Image
              src="/img/300ppi/prizm.png"
              alt="PRIZM"
              width={864}
              height={360}
            />
          </div>
        </div>
      </div>
      <FooterLogo></FooterLogo>
    </>
  );
};

// canvas components goes here
// It will receive same props as Page component (from getStaticProps, etc.)
Page.r3f = (props) => (
  <>
    <Object></Object>
  </>
);

export default Page;

export async function getStaticProps() {
  return {
    props: {
      title: "끌:력 서로가 서로를 이끄는 힘",
    },
  };
}

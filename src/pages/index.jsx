import dynamic from "next/dynamic";
import BoxComponent from "@/components/canvas/Box";
import Header from "@/components/dom/header";
import Footer from "@/components/dom/footer";
import FooterLogo from "@/components/dom/footer-logo";
import { useRouter } from "next/router";

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
          className="flex h-full text-center text-black text-3xl hover:underline decoration-wavy"
        >
          끌:력 서로가 서로를 이끄는 힘
        </button>
      </Header>
      <Footer>
        <FooterLogo />
      </Footer>
    </>
  );
};

// canvas components goes here
// It will receive same props as Page component (from getStaticProps, etc.)
Page.r3f = (props) => (
  <>
    <BoxComponent></BoxComponent>
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

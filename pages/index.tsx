import { Inter } from "next/font/google";
import Head from "next/head";
import { AboutUs, MainBanner, Reviews, TopSelling } from "@/Components/Sections";
import { Categories } from "@/Components/Sections/Categories_Home/Categories";

const inter = Inter({ subsets: ["latin"] });

const interdata = {
  title: "Hello",
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

    <div>
      <MainBanner/>
      <TopSelling/>
      <AboutUs/>
      <Categories/>
      <Reviews/>  
    </div> 
    </>
  );
}

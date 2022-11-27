import Head from "next/head";
import Image from "next/image";
import Footer from "../Components/Navigation/Footer";
import Navbar from "../Components/Navigation/Navbar";
import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const DynamicHeader = dynamic(() => import("../Components/Header/Header"), {
  suspense: true,
});
const DynamicStats = dynamic(() => import("../Components/Stats/Stats"), {
  suspense: true,
});
const DynamicCampaigns = dynamic(
  () => import("../Components/CampaignsHome/CampaignCards"),
  {
    suspense: true,
  }
);
// const DynamicOrgCarousel = dynamic(
//   () => import("../Components/OrganizationsCarousel/Carousel"),
//   {
//     suspense: true,
//   }
// );

const DynamicCAT = dynamic(() => import("../Components/CAT/CAT"), {
  suspense: true,
});

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Suspense>
        <DynamicHeader />
        <DynamicStats />
        <DynamicCampaigns />
        {/* <DynamicOrgCarousel /> */}
        <DynamicCAT />
      </Suspense>
    </div>
  );
}

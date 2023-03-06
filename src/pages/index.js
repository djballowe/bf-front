import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "./components/header/header";
import HomeBody from "./components/home/HomeBody";
import { Container } from "@mui/system";
import coverImage from "../media/testBanner.jpg";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Ballpark Factor</title>
        <meta name="description" content="Ballpark Factor" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="cover" />
      <Container
        maxWidth="xl"
        xs={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Header />
        <HomeBody />
      </Container>
    </>
  );
}

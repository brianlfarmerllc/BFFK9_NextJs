import Head from "next/head";
import Header from "../Header";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/assets/icons/favicon.png" />
        <meta
          name="description"
          content="Frontend Mentor galleria slideshow site built with NextJs"
        />
        <meta name="title" content="BFFK9 | Wylie Texas Dog Training" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Pacifico&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Bebas+Neue&family=Bowlby+One&family=Comfortaa:wght@700&family=Rammetto+One&family=Righteous&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Header />

      <main className="mainView">{children}</main>
    </>
  );
}

import Head from "next/head";
import Header from "../Header";
import Footer from "../Footer";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/assets/icons/favicon.png" />
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

        {/* test font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Amita&family=Berkshire+Swash&family=Caveat+Brush&family=Damion&family=Dokdo&family=Dr+Sugiyama&family=Eagle+Lake&family=Gochi+Hand&family=Mansalva&family=Marck+Script&family=Merienda+One&family=Molle:ital@1&family=Mr+Dafoe&family=Nerko+One&family=Rancho&family=Redressed&family=Schoolbell&family=Sedgwick+Ave&family=Sedgwick+Ave+Display&family=Sriracha&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Header />
      <main className="mainView">{children}</main>
      <Footer />
    </>
  );
}

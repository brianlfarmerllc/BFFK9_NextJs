import Link from "next/link";
import Image from "next/image";
import logo from "../../public/assets/images/detail-logo.png";

export default function Header() {
  return (
    <>
      <header id="home" className="main-head">
        <nav>
          <div className="co-name">
            <Link href="/" passHref>
              <a className="logo">
                <Image width="45px" height="60px" src={logo} alt=" BFF K9 company logo" />
                <div className="name">Best Foot Forward</div>
              </a>
            </Link>
          </div>
          <ul className="main-nav">
            <li>
              <Link href="/" passHref>
                <a> Home </a>
              </Link>
            </li>
            <li>
              <Link href="/about" passHref>
                <a> About </a>
              </Link>
            </li>
            <li>
              <Link href="/programs" passHref>
                <a> Programs </a>
              </Link>
            </li>
            <li>
              <Link href="/contact" passHref>
                <a> Contact </a>
              </Link>
            </li>
            {/* <li>
              <Link href="/social" passHref>
                <a> Social </a>
              </Link>
            </li> */}
          </ul>
        </nav>
      </header>
    </>
  );
}

import Link from "next/link";
export default function GreenButton({ button }) {
  return (
    <Link href={button.href} passHref>
      <a className="link-button"> {button.buttonText} </a>
    </Link>
  );
}

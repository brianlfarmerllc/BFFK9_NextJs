import Link from "next/link";
export default function HeroHome() {
  return (
    <section className="hero">
      <div className="text-container">
        <h1 className="hero-h1">Welcome to Best Foot Forward K9 Training</h1>
        <h2 className="hero-h2">
          Helping to create a happy and healthy relationship between you and your dog
        </h2>
        <Link href="./programs" passHref>
          <a className="link-button"> See How </a>
        </Link>
      </div>
    </section>
  );
}

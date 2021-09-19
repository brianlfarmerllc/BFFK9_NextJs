import GreenButton from "../GreenButton";

export default function Hero({ hero }) {
  return (
    <section className="hero">
      <div className="text-container">
        <h1 className="hero-h1">{hero.title}</h1>
        <h2 className="hero-h2">{hero.subtitle}</h2>
        <GreenButton button={hero} />
      </div>
    </section>
  );
}

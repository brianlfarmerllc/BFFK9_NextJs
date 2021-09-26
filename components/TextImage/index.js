import GreenButton from "../GreenButton";

export default function TextImage({ content }) {
  const button = {
    buttonText: "Learn More",
    href: "/programs",
  };

  return (
    <section className="white-section">
      <div className="text-container">
        <h2 className="top-header">{content.topHeader}</h2>
        <h3 className="header">{content.header}</h3>
        <p className="copy">{content.copy}</p>
        {content.copy2 ? <p className="copy">{content.copy2}</p> : null}
        <GreenButton button={button} />
      </div>
      <div className="img-container">{content.image}</div>
    </section>
  );
}

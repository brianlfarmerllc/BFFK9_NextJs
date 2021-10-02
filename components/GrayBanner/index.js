import ProgramCopy from "../ProgramCopy";

export default function GrayBanner({ banner }) {
  return (
    <section className="banner">
      <h3 className="banner-title">{banner.title}</h3>
      <div className="banner-container">
        {banner.cities ? <div className="banner-cities">{banner.cities}</div> : null}
        {banner.items ? (
          <div className="banner-items">
            {banner.items.map((item, index) => (
              <div className={`item item${index + 1}`}>{item}</div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}

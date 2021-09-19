export default function GrayBanner({ banner }) {
  return (
    <section className="banner">
      <h3 className="banner-title">{banner.title}</h3>
      <div className="banner-container">{banner.content}</div>
    </section>
  );
}

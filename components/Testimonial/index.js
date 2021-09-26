import Image from "next/image";

export default function Testimonial({ content }) {
  return (
    <section className="testimonial-section">
      {/* <h2 className="header">Client Testimonial</h2> */}
      <div className="testimonial">
        <div className="img-container">
          <Image src={content.image}></Image>
        </div>
        <div className="text-container">
          <h3 className="testimonial-copy">
            <span className="quote open-quote"></span>
            {content.copy}
            <span className="quote close-quote"></span>
          </h3>
        </div>
      </div>
    </section>
  );
}

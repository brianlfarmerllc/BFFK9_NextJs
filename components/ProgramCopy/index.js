import Image from "next/image";

export default function ProgramCopy({ copy }) {
  return (
    <>
      <div className="copy-container">
        <div className="copy-text">
          <h2 className="copy-price">{copy.price}</h2>
          <h3 className="copy-header">{copy.title}</h3>
          <p className="program-copy">{copy.copy1}</p>
          <p className="program-copy">{copy.copy2}</p>
          <p className="program-copy">{copy.copy3}</p>
          {copy.copy4 ? <p className="program-copy">{copy.copy4}</p> : null}
          {copy.copy5 ? <p className="program-copy">{copy.copy5}</p> : null}
          {copy.copy6 ? <p className="program-copy">{copy.copy6}</p> : null}
          {copy.copy7 ? <p className="program-copy">{copy.copy7}</p> : null}
          {copy.copy8 ? <p className="program-copy">{copy.copy8}</p> : null}
        </div>
      </div>
    </>
  );
}

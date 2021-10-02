import Link from "next/link";

export default function Footer() {
  const currentDate = new Date().getFullYear();

  return (
    <>
      <footer className="main-footer">
        <nav>
          <h3 className="copyright">&copy; 2017 - {currentDate} Best Foot Forward K9 Training</h3>
        </nav>
      </footer>
    </>
  );
}

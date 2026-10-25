import { useEffect, useState } from "react";
import { NAV } from "../data.jsx";

const MAP = {
  offer: "services",
  process: "services",
  impact: "work",
  clients: "work",
  voices: "pricing",
  faq: "pricing",
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [cur, setCur] = useState("home");

  useEffect(() => {
    const f = () => {
      setScrolled(scrollY > 30);
      let c = "home";
      document.querySelectorAll("main section").forEach((s) => {
        if (s.getBoundingClientRect().top < innerHeight * 0.4) c = s.id;
      });
      setCur(MAP[c] || c);
    };
    f();
    addEventListener("scroll", f, { passive: true });
    return () => removeEventListener("scroll", f);
  }, []);

  return (
    <header id="hd" className={scrolled ? "s" : ""}>
      <div className="wrap nv">
        <a href="#home" className="lg" aria-label="Techsters home">
          <img src="/techsters-logo.png" alt="Techsters logo" />
          <span>Techsters</span>
        </a>
        <button
          id="mt"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          &#9776;
        </button>
        <nav className={"nl" + (open ? " o" : "")}>
          {NAV.map(([id, label]) => (
            <a
              key={id}
              href={"#" + id}
              className={cur === id ? "on" : ""}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <a href="#book" className="btn b1" onClick={() => setOpen(false)}>
            Book consultation
          </a>
        </nav>
      </div>
    </header>
  );
}

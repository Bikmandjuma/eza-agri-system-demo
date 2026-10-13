import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { CirclePlay, Cpu, Home, Info, Leaf, Mail, Menu, ScanLine, X } from "lucide-react";
import { PROJECT_NAME, PROJECT_TAGLINE } from "../config.js";

const LINKS = [
  { to: "/", label: "Home", icon: Home },
  { to: "/about", label: "About", icon: Info },
  { to: "/technology", label: "Our Technology", icon: Cpu },
  { to: "/agriscan", label: "AgriScan-AI", icon: ScanLine },
  { to: "/demo", label: "Demo", icon: CirclePlay },
  { to: "/contact", label: "Contact", icon: Mail },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Close the mobile menu after every navigation
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth > 900 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Link to="/" className="brand" aria-label={`${PROJECT_NAME} home`}>
          <span className="brand__logo" aria-hidden="true">
            <Leaf size={22} strokeWidth={2.2} />
          </span>
          <span className="brand__text">
            <strong>{PROJECT_NAME}</strong>
            <small>{PROJECT_TAGLINE}</small>
          </span>
        </Link>

        <nav id="main-nav" className={`nav ${open ? "nav--open" : ""}`} aria-label="Main navigation">
          {LINKS.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) => `nav__link ${isActive ? "is-active" : ""}`}
            >
              <Icon size={16} aria-hidden="true" />
              {label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="nav-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
    </header>
  );
}

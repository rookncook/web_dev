import { Link, useLocation } from "react-router-dom";
const Nav1 = () => {
  const { pathname } = useLocation();
  return (
    <nav className="nav nav-tabs mt-2">
      <Link
        to="/Kanbas"
        className={`nav-link ${pathname.includes("Kanbas") ? "active" : ""}`}
      >
        Kanbas
      </Link>
      <Link
        to="/Labs/a3"
        className={`nav-link ${pathname.includes("a3") ? "active" : ""}`}
      >
        A3
      </Link>
      <Link className="nav-link" to="/Labs/a4">
        A4
      </Link>
      <Link
        to="/Labs/a5"
        className={`nav-link ${pathname.includes("a5") ? "active" : ""}`}
      >
        A5
      </Link>
    </nav>
  );
};

export default Nav1;

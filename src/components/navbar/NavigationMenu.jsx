import { Link } from "react-router-dom";

export default function NavigationMenu() {
  const pages = [
    { nav: "Home", link: "/" },
    { nav: "Contact", link: "/contact" },
    { nav: "About us", link: "/about" },
    { nav: "Login", link: "/login" },
  ];
  return (
    <>
      {pages.map((page) => (
        <Link
          key={page.nav}
          to={page.link}
          style={{
            textDecoration: "none",
            cursor: "default",
          }}>
          <button>{page.nav}</button>
        </Link>
      ))}
    </>
  );
}

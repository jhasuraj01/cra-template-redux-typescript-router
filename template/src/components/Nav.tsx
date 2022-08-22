import { NavLink, useLocation } from "react-router-dom";

export function Nav() {
  const { search, hash } = useLocation()
  return (
    <nav>
      <NavLink to={`/${search}${hash}`}>Home</NavLink>
      <NavLink to={`/page1${search}${hash}`}>Page 1</NavLink>
      <NavLink to={`/page2${search}${hash}`}>Page 2</NavLink>
      <NavLink to={`/page3${search}${hash}`}>Page 3</NavLink>
    </nav>
  );
}

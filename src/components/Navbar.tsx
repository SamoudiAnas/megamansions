import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  //classNames for navlinks
  const defaultClassNameForLink: string =
    "p-2 cursor-pointer hover:border-b-2 hover:border-b-blue-600 ";
  const activeClassName: string = "border-b-2 border-b-blue-600";

  const checkIfActive = (isActive: boolean): string => {
    if (isActive) return defaultClassNameForLink + activeClassName;
    return defaultClassNameForLink;
  };

  return (
    <nav className="container flex justify-between py-8">
      <h3>Mega Mansions</h3>
      <ul className="flex gap-6 items-center">
        <li>
          <NavLink to="/" className={({ isActive }) => checkIfActive(isActive)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/buy"
            className={({ isActive }) => checkIfActive(isActive)}
          >
            Buy
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sell"
            className={({ isActive }) => checkIfActive(isActive)}
          >
            Sell
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/rent"
            className={({ isActive }) => checkIfActive(isActive)}
          >
            Rent
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) => checkIfActive(isActive)}
          >
            Login
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/browse"
            className={({ isActive }) => checkIfActive(isActive)}
          >
            Browse Houses
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

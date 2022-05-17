const Navbar: React.FC = () => {
  return (
    <nav className="container flex justify-between py-8">
      <h3>Mega Mansions</h3>
      <ul className="flex gap-6 items-center">
        <li className="p-2 cursor-pointer hover:border-b-2 hover:border-b-red-600">
          Home
        </li>
        <li className="p-2 cursor-pointer hover:border-b-2 hover:border-b-red-600">
          About
        </li>
        <li className="p-2 cursor-pointer hover:border-b-2 hover:border-b-red-600">
          Services
        </li>
        <li className="p-2 cursor-pointer hover:border-b-2 hover:border-b-red-600">
          Contact
        </li>
        <li className="p-2 cursor-pointer hover:border-b-2 hover:border-b-red-600">
          Browse Mansions
        </li>
        <li className="p-2 cursor-pointer hover:border-b-2 hover:border-b-red-600">
          Login
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

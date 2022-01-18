import Logo from "../images/airbnb.png";

const Navbar = () => {
  return (
    <nav>
      <img src={Logo} alt="logo" className="logo" />
    </nav>
  );
};

export default Navbar;

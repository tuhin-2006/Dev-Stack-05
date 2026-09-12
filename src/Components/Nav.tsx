import Hamburger from "../assets/hamburger.png";
import Logo from "../assets/logo-text.png";

const Nav = () => {
  return (
    <nav className="sticky top-0  bg-white border-b border-gray-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 h-16">
        <button className="text-2xl md:hidden">
          <img src={Hamburger} alt="hamburger.png" />
        </button>
        <img src={Logo} alt="logo-text.png" className="w-24 md-w-28" />
        <div className="md:flex text-sm gap-6 hidden">
          <a href="#" className="text-pink-500">
            Home
          </a>
          <a href="#">Technologis</a>
          <a href="#">Projects</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-xs md:text-sm">Sign In</button>
          <button className="rounded-full bg-pink-500  px-4 py-2 text-xs text-white">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

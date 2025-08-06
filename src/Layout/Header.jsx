
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from "flowbite-react";
import { NavLink } from "react-router";
import Logo from '../assets/image/logo.jpg'
import { useSelector } from "react-redux";


export default function Header() {
  const count = useSelector((state) => state.counter.value);
  return (
    <Navbar fluid rounded className="container mx-auto">
      <NavbarBrand href="#">
        <img src={Logo} className="mx-auto h-20 w-auto" alt="logo" />
      </NavbarBrand>
      <div className="flex md:order-2 gap-2">
        <NavLink to="auth/login">
          <Button>Login</Button>
        </NavLink>
        <NavLink to="/auth/signup">
          <Button>Sign Up</Button>
        </NavLink>
        <NavLink to="/cart" className="flex items-center gap-2">
          <div>🛒</div>
          <div className="px-2 bg-red-500 rounded-4xl">{count}</div>
        </NavLink>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavLink to="/" href="#" active>
          Home
        </NavLink>
        <NavLink to="/collection" href="#">
          Collection
        </NavLink>
        <NavLink to="/about" href="#">
          About
        </NavLink>
        <NavLink to="/contact" href="#">
          Contact
        </NavLink>
      </NavbarCollapse>
    </Navbar>
  );
}

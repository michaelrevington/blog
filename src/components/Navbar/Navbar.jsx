import { useCallback, useState } from "react";
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler } from "reactstrap";
import "../../styles/navbar.css";

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => {
    setIsOpen((state) => !state);
  }, []);

  return (
    <Navbar container="lg" dark sticky="top" color="dark" expand>
      <hr className="vl mx-2" />
      <NavbarBrand href="/">
        <img className="rounded" src="./logo.png" alt="logo" width={50}></img>
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="me-auto" navbar></Nav>
      </Collapse>
      <hr className="vl mx-2" />
    </Navbar>
  );
};

export default NavbarComponent;

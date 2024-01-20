import { Container } from "reactstrap";
import NavbarComponent from "./Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";

const Layout = () => {
  return (
    <>
      <NavbarComponent />
      <main className="container my-2 page">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;

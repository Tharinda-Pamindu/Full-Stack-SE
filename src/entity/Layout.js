import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand>THARINDA</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/home">HOME</Nav.Link>
              <Nav.Link href="/users">USER</Nav.Link>
              <Nav.Link href="/items">ITEMS</Nav.Link>
              <Nav.Link href="/orders">ORDERS</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
      <Outlet/>
    </div>
  );
};
export default Layout;

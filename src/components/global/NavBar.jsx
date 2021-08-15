import "../../styles/NavBar.css";
import {Nav, Navbar} from 'react-bootstrap';

// assets 
import logo from '../../assets/logo/logo.png';


<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
  integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
  crossorigin="anonymous"
/>

function NavBar() {
 

  return (
    <>
    <Navbar className="main-menu">
      <Navbar.Brand href="#"> <img src={logo} alt="sweet-home-logo" className="logo-img"/> </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Nav.Link href="#home" className="link-menu">Remeras</Nav.Link>
        <Nav.Link href="#home" className="link-menu">Pantalones</Nav.Link>
        <Nav.Link href="#home" className="link-menu">Camperas</Nav.Link>
        <Nav.Link href="#home" className="link-menu">Sweaters</Nav.Link>
        <Nav.Link href="#home" className="link-menu">Accesorios</Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  </>
  );
}

export default NavBar;
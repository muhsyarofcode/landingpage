import '../../globalStyle/globalStyle.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigasibar() {

    return (
      
      <div>
        <Navbar variant="dark" expand="lg" className='container-navbar' sticky="top">
      <Container>
        <Navbar.Brand className='logo' href='/'>MSH</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='link' href="https://github.com/MSH1317">Github</Nav.Link>
            <Nav.Link className='link' href="https://www.youtube.com/@mshgo">Youtube</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
    );
  }
  
  export default Navigasibar;
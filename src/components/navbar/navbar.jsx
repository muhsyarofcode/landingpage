import '../../globalStyle/globalStyle.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Navigasibar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


    return (
      
      <div>
        <Offcanvas placement='end' show={show} onHide={handleClose} >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>MSH Profile</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='wraper-introduce'>
            <div className='intro'>
              <p className='text-intro'>MSH is a startup created by my brother using the initials of our names. This website will serve and provide information about information technology, as for the MSH website that has been created to serve and provide information about  <a className='linkText-intro' href='https://rintikberisik.com/'>rintikberisik</a> literacy. And also follow MSH social media to get more information.</p>
              <div className='link-sosmed'>
                <a className='img-link1' href='https://www.instagram.com/msh.co_bookstore/'><span/></a>
                <a className='img-link2' href='https://www.instagram.com/m.s.h_go/'><span/></a>
                <a className='img-link3' href='https://www.youtube.com/@mshgo'><span/></a>
                <a className='img-link4' href='https://www.tokopedia.com/msh-solo'><span/></a>
                <a ClassName='img-link5' href='https://shopee.co.id/mshsolobookstore212'><span/></a>
                <a className='img-link6' href='https://rintikberisik.com/'><span/></a>
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

        <Navbar variant="dark" expand="lg" className='container-navbar' fixed="top">
      <Container>
        <Navbar.Brand className='logo' href='#' onClick={handleShow}>MSH</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='link' href="/#home">Home</Nav.Link>
            <Nav.Link className='link' href="/#projects">Projects</Nav.Link>
            <Nav.Link className='link' href="/#service">Service</Nav.Link>
            <a href="/Connect"><button type="submit" className="tombolConnect btn btn-primary">Let's Connect</button></a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
    );
  }
  
  export default Navigasibar;
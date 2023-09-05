import '../../globalStyle/globalStyle.css'
import { FaUser } from 'react-icons/fa';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Plx from "react-plx";
import foto from '../../assets/2.jpg';
import CV from '../../assets/Curriculum Vitae.pdf'


function Home() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    const parallaxData = [
        {
          start: "self",
          end: 420,
          properties: [
            {
                startValue: 1,
                endValue: 0,
                property: "opacity",
              },
          ],
        },
      ];

    return(
        <div id='home' className='container-home'>
            <div className='container'>
                <div className="wraper">
                    <h1>Hi i'm a</h1> 
                    <ul className="dinamik-teks">
                        <li><span>Programmer</span></li>
                        <li><span>Creator</span></li>
                        <li><span>Ilustrator</span></li>
                    </ul>
                </div>
                <div className='wraper-tombol-text'>
                    <div className='wraper-tombol'>                
                        <button className='tombol1' onClick={handleShow}><FaUser className='icon-user' />Profile</button>
                        <button className='tombol1' onClick={handleShow2}>Hire me</button>
                        <Modal show={show} onHide={handleClose}>
                            <div className='bg-dark text-white rounded-1'>
                            <Modal.Header closeButton>
                            <Modal.Title >My profile</Modal.Title>
                            </Modal.Header>
                            <Modal.Body >
                                Muhammad Syarof Hidayatullah, age 18, graduated from SMKN 2 Sukrakarta majoring in Computer and Network Engineering. Domiciled in Danyung 03/02, Kwarasan, Sukoharjo, Central Java, Indonesia. still single and happy. has a hobby of playing online games, climbing mountains, playing guitar, and many. want to know more? follow my social media and if there is time contact me, thank you.
                                <br />
                                And download my <a className='TextLink text-warning' href={CV} download="CV">Curriculum vitae</a>
                            </Modal.Body>
                            <Modal.Footer>
                            </Modal.Footer>
                            </div>
                        </Modal>
                        <Modal show={show2} onHide={handleClose2}>
                            <div className='bg-dark text-white rounded-1'>
                            <Modal.Header closeButton>
                            <Modal.Title>Contact me</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                WhatsApp : <a className='TextLink text-warning' href="https://wa.me/qr/ECO2AZXOYSMHJ1">wa.me/qr/Muhsyarof</a> 
                                <br />
                                Telegram : <a className='TextLink text-warning' href="https://t.me/Muhsyarof">t.me/Muhsyarof</a>
                                <br />
                                Email : <a className='TextLink text-warning' href="mailto:muhsyarof121@gmail.com">Send Email</a>
                            </Modal.Body>
                            <Modal.Footer>
                            </Modal.Footer>
                            </div>
                        </Modal>
                    </div>
                    <p className='texth'>Introducing my name is muhsyarof, a person who has a sense of responsibility, persistent and honest. has been a programmer since high school, if there is anything I can help please submit your problem <a className='linkTexth' href="/#service">here</a>.</p>
                </div>
            </div>
            <Plx className='imgandtext'parallaxData={parallaxData}>
                <div className='zoomIn'>
                    <img className='ft-img' src={foto} alt='foto'/>
                </div>  
            </Plx>
        </div>
    )
}

export default Home;
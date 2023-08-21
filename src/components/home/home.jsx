import '../../globalStyle/globalStyle.css'
import { FaUser } from 'react-icons/fa';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Plx from "react-plx";
import foto from '../../assets/foto.png';
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
          end: 450,
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
                        <li><span>Youtuber</span></li>
                        <li><span>Ilustrator</span></li>
                    </ul>
                </div>
                <div className='wraper-tombol-text'>
                    <div className='wraper-tombol'>                
                        <button className='tombol1' onClick={handleShow}><FaUser className='icon-user' />Profile</button>
                        <button className='tombol2' onClick={handleShow2}>Hire me</button>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                            <Modal.Title>My profile</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                Muhammad Syarof Hidayatullah, age 18, graduated from SMKN 2 Sukrakarta majoring in Computer and Network Engineering. Domiciled in Danyung 03/02, Kwarasan, Sukoharjo, Central Java, Indonesia. still single and happy. has a hobby of playing online games, climbing mountains, playing guitar, and many. want to know more? follow my social media and if there is time contact me, thank you.
                                <br />
                                And download my <a className='TextLink' href={CV} download="CV">Curriculum vitae</a>
                            </Modal.Body>
                            <Modal.Footer>
                            </Modal.Footer>
                        </Modal>
                        <Modal show={show2} onHide={handleClose2}>
                            <Modal.Header closeButton>
                            <Modal.Title>Contact me</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                WhatsApp : <a href="https://wa.me/qr/ECO2AZXOYSMHJ1">wa.me/qr/Muhsyarof</a> 
                                <br />
                                Telegram : <a href="https://t.me/Muhsyarof">t.me/Muhsyarof</a>
                                <br />
                                Email : <a href="mailto:muhsyarof121@gmail.com">Send Email</a>
                            </Modal.Body>
                            <Modal.Footer>
                            </Modal.Footer>
                        </Modal>
                    </div>
                    <p className='texth'>Introducing my name is muhsyarof, a person who has a sense of responsibility, persistent and honest. has been a programmer since high school, if there is anything I can help please submit your problem <a className='linkTexth' href="/#service">here</a>.</p>
                </div>
            </div>
            <Plx className='imgandtext'parallaxData={parallaxData}>
                <img className='ft-img' src={foto} alt='foto'/>
                <h3>Berjuang</h3>
            </Plx>
        </div>
    )
}

export default Home;
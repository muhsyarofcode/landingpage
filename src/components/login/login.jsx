import React from "react";
import Button from 'react-bootstrap/Button';
import googleSvg from '../../assets/googleSvg.svg';
import facebookSvg from '../../assets/facebookSvg.svg';
import Login from "../loginapp/loginapp";
import '../../globalStyle/globalStyle.css'
import Footer from "../footer/footer";

const Portal = () => {
    const AuthGoogle = async() => {
        window.open("https://ultramarine-hen-kilt.cyclic.app/loginGoogle","_self")
    }
    const AuthFacebook = async() => {
        window.open("https://ultramarine-hen-kilt.cyclic.app/loginfacebook","_self")
    }
    return(
        <div>
        <section className="ContainerLoginSignup">
            <div className="ContainerSignup">
                    <Button className="m-2" onClick={AuthGoogle} variant="warning"><img className="m-1" src={googleSvg} alt="svg" height={25}/> Sign up with Google </Button>
                    <Button className="m-2" onClick={AuthFacebook} variant="warning"><img className="m-1" src={facebookSvg} alt="svg" height={25}/> Sign up with Facebook </Button>
            </div>
            <div className="VerticalLine"></div>
            <div className="">
                <Login/>
            </div>
        </section>
        <Footer/>
        </div>
    )
}

export default Portal;
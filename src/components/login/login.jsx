import React from "react";
import Button from 'react-bootstrap/Button';
import googleSvg from '../../assets/googleSvg.svg'
import Login from "../loginapp/loginapp";

const Portal = () => {
    const AuthGoogle = async() => {
        window.open("https://ultramarine-hen-kilt.cyclic.app/loginGoogle","_self")
    }
    return(
        <section className="d-flex-column justify-content-center m-3">
            <div className="d-flex justify-content-center">
                <Button className="mt-5" onClick={AuthGoogle} variant="warning"><img className="m-1" src={googleSvg} alt="svg" height={25}/> Sign up with Google </Button>
            </div>
            <div className="">
                <Login/>
            </div>
        </section>
    )
}

export default Portal;
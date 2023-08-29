import React from 'react';
import { useNavigate} from "react-router-dom";
import axios from "axios";
import Button from 'react-bootstrap/Button';

const Navbar = () => {
  const navigate = useNavigate();

  const out = async() => {
    try {
        await axios.delete('https://ultramarine-hen-kilt.cyclic.app/out',{
          withCredentials:true
        });
        navigate("/Connect")
    } catch (error) {
        if(error.response){
            console.error(error)
        }
    }
}

  return (
    <div className='container d-flex justify-content-between mt-3'>
      <h1 className='text-center'>MSH</h1>
      <div>
        <Button onClick={out} variant="danger">Log Out</Button>
      </div>
      
    </div>
  )
}

export default Navbar;
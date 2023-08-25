import React from 'react';
import { useNavigate} from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const navigate = useNavigate();

  const Logout = async() => {
    try {
        await axios.delete('https://rich-red-llama-wig.cyclic.cloud/logout',{
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
    <div className='container mt-5 is-flex is-justify-content-space-between'>
      <h1 className='ml-5'>MSH</h1>
      <button onClick={Logout} className="button is-light mr-5">
        Log Out
      </button>
    </div>
  )
}

export default Navbar;
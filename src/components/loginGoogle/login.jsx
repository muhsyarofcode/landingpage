import React from "react";
import axios from "axios";

const LoginGoogle = () => {
    const AuthGoogle = async() => {
        try {
            await axios.get('https://rich-red-llama-wig.cyclic.cloud/login/federated/google',{
                withCredentials:true
            });
        } catch (error) {
            console.log("error")
        }
    }
    return(
        <div>
            <button onClick={AuthGoogle}>login google</button>
        </div>
    )
}

export default LoginGoogle;
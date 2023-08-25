import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();
    const Auth = async(e, res) => {
        e.preventDefault();
        try {
            await axios.post('https://rich-red-llama-wig.cyclic.cloud/login',{
                email: email,
                password: password
            },{
                withCredentials:true
            });
            navigate("/Connect/dashboard");
        } catch (error) {
            if(error.response){
                setMsg(error.response.data.msg)
            }
        }
    }
    return(
        <section className="hero has-background-grey-light is-fullheight is-fullwidth">
          <div className="hero-body">
            <div className="container">
                <div className="columns is-centered">
                    <div className="column is-4-desktop">
                        <div className="box">
                            <form onSubmit={Auth} >
                        <p className="has-text-center">{msg}</p>
                            <div className="field mt-5">
                                <label htmlFor="username" className="label">Email or Username</label>
                                <div className="controls">
                                    <input type="text" name="username" className="input" placeholder="Username"
                                    value={email} onChange={(e) => setEmail(e.target.value)}/>
                                </div>
                            </div>
                            <div className="field mt-5">
                                <label htmlFor="password" className="label">Password</label>
                                <div className="controls">
                                    <input type="password" name="password" className="input" placeholder="********"
                                     value={password} onChange={(e) => setPassword(e.target.value)}/>
                                </div>
                            </div>
                            <div className="field mt-5">
                                <button className="button is-success is-fullwidth">Login</button>
                            </div>
                            </form>
                            <p className="mt-3">login with account google <a href="/Connect/authGoogle">Login</a></p>
                            <p className="mt-3">don't have an account? <a href="/Connect/register">Sign Up</a></p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </section>
    )
}

export default Login;
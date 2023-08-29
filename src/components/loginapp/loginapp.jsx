import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();
    const Auth = async(e, res) => {
        e.preventDefault();
        try {
            await axios.post('https://ultramarine-hen-kilt.cyclic.app/login',{
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
        <section className="m-5">
            <p>{msg}</p>
            <Form onSubmit={Auth}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email"  name="username" className="input" placeholder="Username" 
                    value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" className="input" placeholder="********" 
                    value={password} onChange={(e) => setPassword(e.target.value)}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </section>
    )
}

export default Login;
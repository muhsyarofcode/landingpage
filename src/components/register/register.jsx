import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Register = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confPassword,setConfPassword] = useState('');
    const [msg,setMsg] = useState('');
    const navigate = useNavigate();

    const Register = async(e) => {
        e.preventDefault();
        try {
            await axios.post('https://ultramarine-hen-kilt.cyclic.app/users',{
                name: name,
                email: email,
                password: password,
                confPassword: confPassword
            });
            navigate("/Connect");
            alert('Registered')
        } catch (error) {
            if(error.response){
                setMsg(error.response.data.msg)
            }
        }
    }
    return(
        <section className="m-5">
            <p className="text-center text danger">{msg}</p>
            <Form onSubmit={Register}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control  type="text" className="input" placeholder="Name"
                    value={name} onChange={(e) => setName(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control  type="email" className="input" placeholder="Email"
                    value={email} onChange={(e) => setEmail(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" className="input" placeholder="********"
                    value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" className="input" placeholder="********"
                    value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
          <p className="mt-3">already have an account? <a href="/Connect">Sign In</a></p>
        </section>
    )
}

export default Register;
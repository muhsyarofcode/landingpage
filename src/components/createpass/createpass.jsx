import React,{useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../../globalStyle/globalStyle.css"


const CreatePass = (res,req) => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confPassword,setConfPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();
    const Auth = async(e, res) => {
        e.preventDefault();
        try {
            await axios.post('https://ultramarine-hen-kilt.cyclic.app/createpassword',{
                email: email,
                password: password,
                confPassword: confPassword
            },{
                withCredentials:true
            });
            alert("password created, now you can login")
            navigate("/Connect");
        } catch (error) {
            if(error.response){
                setMsg(error.response.data.msg)
            }
        }
    }
    return(
    <div className="createPassword ">
        <div className="p-5">
            <h1 className="text-center">Create password for App</h1>
            <p className="text-danger mt-4 text-center">{msg}</p>
            <Form onSubmit={Auth}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Confirm Email address</Form.Label>
                    <Form.Control type="email"  name="email" className="input" placeholder="Email" 
                    value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password for app</Form.Label>
                    <Form.Control type="password" name="password" className="input" placeholder="********" 
                    value={password} onChange={(e) => setPassword(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" className="input" placeholder="********"
                    value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Create password
                </Button>
            </Form>
            <p className="mt-3">already have a password? <a className="text-primary" href="/Connect">go back to connect</a></p>
        </div>
    </div>
    )
}

export default CreatePass;
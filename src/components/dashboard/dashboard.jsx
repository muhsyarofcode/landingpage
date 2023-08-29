import React,{useState, useEffect} from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Navbar from "../navbarConnect/navbar";
import { useNavigate} from "react-router-dom"
import Button from 'react-bootstrap/Button';

const Dashboard = () => {
    const [name, setName] = useState('');
    const [token, setToken] = useState('');
    const [files, setFiles] = useState([]);
    const navigate = useNavigate();

    useEffect(()=> {
        refreshToken();
    });

    const refreshToken = async(res,req) => {
        try {
            const response = await axios.get('https://ultramarine-hen-kilt.cyclic.app/token',{
                withCredentials: true
            });
            setToken(response.data)
            const decoded = jwt_decode(response.data)
            setName(decoded.name)
        } catch (error) {
            if(error.response){
                navigate("/Connect")
            }
        }
    }

    const getUsers = async() =>{
        const response = await axios.get('https://ultramarine-hen-kilt.cyclic.app/users',{
            withCredentials: true,
            headers:{
                Authorization: `Bearer ${token}`
            }
        });
        console.log(response.data)
        setFiles(response.data)
    }

    return(
        <div>
            <Navbar/>
            <div className="container">
                <h1 className="text-center mt-3">Welcome Back <h1 className="text-primary">{name}</h1></h1>
                <Button className="mt-3" onClick={getUsers} variant="warning">Get Users</Button>
                <div className="m-2">
                {files.map((file, idx) => (
                        <div key={idx}>
                            <p>{file.id}</p>
                            <p>{file.name}</p>
                            <p>{file.email}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
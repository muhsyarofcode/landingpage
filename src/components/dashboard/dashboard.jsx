import React,{useState, useEffect} from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Navbar from "../navbarConnect/navbar";
import { useNavigate} from "react-router-dom"

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
            const response = await axios.get('https://rich-red-llama-wig.cyclic.cloud/token',{
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
        const response = await axios.get('https://rich-red-llama-wig.cyclic.cloud/users',{
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
            <div className="container mt-5">
                <h1 className="title ml-5">Welcome Back {name}</h1>
                <button className="button is-info ml-3" onClick={getUsers}>Get Users</button>
                <div className="ml-5 mt-5"> 
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
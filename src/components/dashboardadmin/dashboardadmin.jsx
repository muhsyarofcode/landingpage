import React,{useState, useEffect} from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate} from "react-router-dom"
import Table from 'react-bootstrap/Table';

const DashboardAdmin = () => {
    const navigate = useNavigate();
    const [token, setToken] = useState('');
    const [files, setFiles] = useState([]);

    useEffect(()=> {
        refreshToken();
    },[]);

    const getUsers = async() =>{
    const response = await axios.get('https://ultramarine-hen-kilt.cyclic.app/users',{
        withCredentials: true,
        headers:{
            Authorization: `Bearer ${token}`
        }
    });
       setFiles(response.data)
    }

    const refreshToken = async(res,req) => {
            const response = await axios.get('https://ultramarine-hen-kilt.cyclic.app/token',{
                withCredentials: true
            });
            setToken(response.data)
            const decoded = jwt_decode(response.data)
            const role = decoded.role
            if (role !== "admin"){
                navigate("/connect")
            }
        }

    return(
        <div>
            <h1>dashboard admin</h1>
            <button className="tombol1" onClick={getUsers}>Data user ConnectApp</button>
            <div>
                {files.map((file, idx) => (
                            <div className="mt-2"  key={idx}>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                        <th>Id</th>
                                        <th>GoogleId</th>
                                        <th>FacebookId</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Photo</th>
                                        <th>Role</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td>{file.id}</td>
                                        <td>{file.googleId}</td>
                                        <td>{file.facebookId}</td>
                                        <td>{file.name}</td>
                                        <td>{file.email}</td>
                                        <td>{file.photo}</td>
                                        <td>{file.role}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        ))}
            </div>
        </div>
    )
}

export default DashboardAdmin;
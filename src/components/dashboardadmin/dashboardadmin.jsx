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
            <button className="tombol1" onClick={getUsers}>Data user</button>
            <div>
                            <div className="tableData m-2 overflow-auto" >
                                <Table striped bordered hover variant="dark">
                                    <thead>
                                        <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Photo</th>
                                        <th>Role</th>
                                        <th>Activity</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {files.map((file, idx) => (
                                        <tr key={idx}>
                                        <td>{file.id}</td>
                                        <td>{file.name}</td>
                                        <td>{file.email}</td>
                                        <td><img src={file.photo} alt="userphoto" height={30} width={30}/></td>
                                        <td>{file.role}</td>
                                        <td>{file.activity}</td>
                                        </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
            </div>
        </div>
    )
}

export default DashboardAdmin;
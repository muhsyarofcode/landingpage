import React,{useState, useEffect} from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate} from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const ProfileUser = () => {
    const [role, setRole] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [photo, setPhoto] = useState('');
    const [newname, setNewname] = useState('');
    //const [token, setToken] = useState('');
    //const [files, setFiles] = useState([]);
    const navigate = useNavigate();
    const admin = "admin"
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(()=> {
        refreshToken();
    },[]);

    const refreshToken = async(res,req) => {
        try {
            const response = await axios.get('https://ultramarine-hen-kilt.cyclic.app/token',{
                withCredentials: true
            });
            //setToken(response.data)
            const decoded = jwt_decode(response.data)
            setName(decoded.name)
            setPhoto(decoded.photo)
            setEmail(decoded.email)
            setRole(decoded.role)
        } catch (error) {
            if(error.response){
                navigate("/Connect")
            }
        }
    }

    const navigateAdmin = () =>{
        navigate("/connectchatapp/dashboardadmin")
    }
    const changeName = async(req,res) => {
        try {
            await axios.post('https://ultramarine-hen-kilt.cyclic.app/changename',{
                newname: newname,
                email: email
            },{
                withCredentials:true
            });
            alert("Name changed")
        } catch (error) {
            alert("Failed change name")
        }
    }
    const deleteAccount = async(req,res) => {
            try {
                await axios.delete('https://ultramarine-hen-kilt.cyclic.app/delete',{
                  withCredentials:true
                });
                navigate("/Connect")
                alert("Delete account success")
            } catch (error) {
                if(error.response){
                    console.error(error)
                }
        }
    }
    //const getUsers = async() =>{
    //const response = await axios.get('https://ultramarine-hen-kilt.cyclic.app/users',{
    //    withCredentials: true,
    //    headers:{
    //        Authorization: `Bearer ${token}`
    //    }
    //});
    //   console.log(response.data)
    //   setFiles(response.data)
    //}
    return(
        <div className="userProfile">
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                    <Form onSubmit={changeName}>
                        <Form.Group className="mb-3" controlId="formChangeName">
                            <Form.Label>Change Name</Form.Label>
                            <Form.Control  type="text" className="input" placeholder="New Name"
                            value={newname} onChange={(e) => setNewname(e.target.value)} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
            <h1 className="textProfile">Profile</h1>
            <img className=" photoProfile rounded-5" src={photo} alt="photouser" height={150} width={150} />
            <h3 className="nameProfile text-center mt-3">{name}</h3>
            <p className="textProfile text-secondary">{email}</p>
            <p className="textProfile text-secondary">{role}</p>
            <div className="lineHorizontal"></div>
            <button className="tombol1"onClick={handleShow}>Change name</button>
            <button className="tombol1 mt-4 bg-danger" onClick={deleteAccount}>Delete Account</button>
            <br />
            <button className={`${role === admin ? 'tombol1' : 'roleUser'}`} onClick={navigateAdmin} >Admin</button>
        </div>
    )
}

export default ProfileUser;
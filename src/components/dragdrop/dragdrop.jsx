import '../../globalStyle/globalStyle.css'
import {AiOutlineCloudUpload} from  'react-icons/ai'
import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Axios from 'axios'
import Masage from '../forms/forms'

function DragdropFiles (){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [files, setFiles] = useState([])    
    const onDrop = useCallback(acceptedFiles => {
    if (acceptedFiles?.length){
        setFiles(previousFiles => [
            ...previousFiles,
            ...acceptedFiles.map(file =>
                Object.assign(file,{ preview : URL.createObjectURL(file)}))
        ])
        }else{
            alert("Files required")
        }
    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
    
    const handleSubmit = async e => {
        e.preventDefault()
        if (files?.length){
        try {
            for (let i = 0; i < files.length; i++ ){
                const formData = new FormData()
                files.forEach(file => formData.append('file', file))
                formData.append('upload_preset', 'server')
                Axios.post(
                    "https://api.cloudinary.com/v1_1/dhh7ushfo/raw/upload",
                     formData
                     ).then((response)=>{
                        response = ("Files");
                        console.log(response)
                        
                })
            } 
            alert("Dont close tab for waiting upload files") 
            setFiles([])
        }
       catch (error){
        console.log(error)
        alert("Error Uploading")
       }}else{
        alert("Files Required")
        setShow (false)
       }}
    return(
        <div className='wraper-dragdrop'>
            <form onSubmit={handleSubmit}>
            <h3>Drop Here Your Problem</h3>
            <div className='wraper-container'>
            <div className='container-dragdrop' >
                <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p className='text-input text-light'>Input File</p>
                    <div className='img-dragdrop'>
                        <AiOutlineCloudUpload className='uploadfile'/>
                    </div>
                    {
                        isDragActive ?
                        <p className='text-drop'>Drop the files here ...</p> :
                        <p className='text-drop'>Drag 'n' drop some files here, or click it</p>
                    }
                </div>
            </div>
            </div>
            <div className='dataup'>
                <ul>
                    {files.map(file => (
                        <li key={file.name}>
                            <p className='fileup'>{file.name}</p>
                        </li>
                    ))}
                </ul>
                <button type="submit" className="btn btn-primary mb-2" onClick={handleShow}>Upload to server</button>
                </div>
            </form>
            <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                            <Modal.Title>Your Masage</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Masage/>
                            </Modal.Body>
                            <Modal.Footer>
                            </Modal.Footer>
                    </Modal>
        </div>
    )
}

export default DragdropFiles;
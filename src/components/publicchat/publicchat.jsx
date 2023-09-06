import React,{useState,useEffect,useRef} from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import send from "../../assets/send.png"
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const PublicChat = () => {
    const [email,setEmail] = useState("")
    const [photo,setPhoto] = useState("")
    const [name,setName] = useState("")
    const [message,setMesasage] = useState("")
    const [receivemessage,setReceivemesasage] = useState([])
    const messageendref = useRef(null)

    const getCurrentDate = () =>{

        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        let hour = newDate.getHours();
        let minute = newDate.getMinutes();
        
        return `${year}/${month<10?`0${month}`:`${month}`}/${date} ${hour}:${minute}`
        }
    useEffect(()=> {
        refreshToken();
        autoScroll();
    },[]);
    useEffect(()=>{
        const interval = setInterval(() => {
        receiveMessage();
        }, 1000 * 5)
        return ()=> clearInterval(interval)
    },5000)
    const autoScroll = () =>{
        messageendref.current?.scrollIntoView();
    }
    const refreshToken = async() => {
        const response = await axios.get('https://ultramarine-hen-kilt.cyclic.app/token',{
            withCredentials: true
        });
        //setToken(response.data)
        const decoded = jwt_decode(response.data)
        setName(decoded.name)
        setEmail(decoded.email)
        setPhoto(decoded.photo)
    }
    const receiveMessage = async() => {
        const response = await axios.get('https://ultramarine-hen-kilt.cyclic.app/receivemessage',{
            withCredentials: true
        });
        setReceivemesasage(response.data)
        if (receivemessage !== []) {autoScroll();}
    }
    const SendMessage = async(e,res) => {
        e.preventDefault();
            try {
                await axios.post('https://ultramarine-hen-kilt.cyclic.app/sendmessage',{
                    email: email,
                    name: name,
                    message: message,
                    photo: photo,
                    createdAt: getCurrentDate()
                },{
                    withCredentials:true
                });
                setMesasage("")
                autoScroll()
            } catch (error) {
                alert("failed send message")
                }
    }
    return (
        <div className="publicChat">
            <div className="titleGroup">
                <h1 className="groupTitle text-center text-dark">Public Chat</h1>
            </div>
            <div className="chat">
                {receivemessage.map((message,idx)=>(
                            <div className="mt-1"  key={idx}>
                            <br />
                            <div className={`${email === message.email ? 'chatmasageOwn' : 'chatmasagenotOwn'}`}>
                            <div className={`${email === message.email ? 'ownChat' : 'notownChat'}`}>
                                    <div className="d-flex">
                                        <img className="m-1 rounded-5" src={message.photo} alt="userphoto" height={30} width={30} />
                                        <p className="m-1"><strong>{message.name || <Skeleton/>}</strong></p>
                                    </div>
                                    <p className="m-1">{message.message || <Skeleton/>}</p>
                                    <p className="text-secondary m-2">{message.createdAt || <Skeleton/>}</p>
                                </div>
                            </div>
                            <br />
                            <div ref={messageendref}/>
                        </div>
                    ))}
                </div>
                <form className="controlMasage d-flex" onSubmit={SendMessage} >
                    <textarea name="chat" id="chat" className="textMasage"
                    value={message} onChange={(e) => setMesasage(e.target.value)}
                    placeholder="type a message" required
                    />
                    <button className="sendButton bg-white"><img src={send} alt="paperplane"/></button>
                </form>
        </div>
    )
}

export default PublicChat;
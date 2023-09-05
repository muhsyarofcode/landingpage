import React,{useState,useEffect} from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";


const PublicChat = () => {
    const [email,setEmail] = useState("")
    const [photo,setPhoto] = useState("")
    const [name,setName] = useState("")
    const [message,setMesasage] = useState("")
    const [receivemessage,setReceivemesasage] = useState([])
    const chatContainer = document.getElementById('chat-container')

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
    },[]);
    useEffect(()=>{
        const interval = setInterval(() => {
        receiveMessage();
        console.log("every 10s")
        }, 1000 * 5)
        return ()=> clearInterval(interval)
    },5000)
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
        scrollToBottom()
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
            scrollToBottom()
        } catch (error) {
            alert("failed send message")
            }
    }
    function scrollToBottom() {
        chatContainer.scrollTo(0, chatContainer.scrollHeight)
    }
    return (
        <div className="publicChat" id="chat-container">
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
                                        <p className="m-1"><strong>{message.name}</strong></p>
                                    </div>
                                    <p className="m-1">{message.message}</p>
                                    <p className="text-secondary m-2">{message.createdAt}</p>
                                </div>
                            </div>
                            <br />
                        </div>
                    ))}
                </div>
                <form className="controlMasage d-flex" onSubmit={SendMessage} >
                    <textarea name="chat" id="chat" className="textMasage"
                    value={message} onChange={(e) => setMesasage(e.target.value)}
                    ></textarea>
                    <button  className="sendButton">send</button>
                </form>
        </div>
    )
}

export default PublicChat;
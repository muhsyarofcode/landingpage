import React,{useEffect} from "react";
import {Outlet} from 'react-router-dom'
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
    CDBSidebarFooter
  } from 'cdbreact';
import { NavLink } from 'react-router-dom';
import axios from "axios";
import { useNavigate} from "react-router-dom"
import '../../globalStyle/globalStyle.css'

const AppChat = () => {
    const navigate = useNavigate();
    useEffect(()=> {
        refreshToken();
    },[]);
    const refreshToken = async(res,req) => {
        try {
            await axios.get('https://ultramarine-hen-kilt.cyclic.app/token',{
                withCredentials: true
            });
        } catch (error) {
            if(error.response){
                navigate("/Connect")
            }
        }
    }
    const out = async() => {
        try {
            await axios.delete('https://ultramarine-hen-kilt.cyclic.app/out',{
              withCredentials:true
            });
            navigate("/Connect")
        } catch (error) {
            if(error.response){
                console.error(error)
            }
        }
    }
    return(
        <div className="d-block">
            <div className="chatApp">
                <div className="sideBar" style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
                <CDBSidebar textColor="#fff" className="bg-dark">
                    <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                        ConnectApp
                    </CDBSidebarHeader>

                    <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                        <NavLink exact to="/connectchatapp/profileuser" activeClassName="activeClicked">
                        <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/connectchatapp/publicchat" activeClassName="activeClicked">
                        <CDBSidebarMenuItem icon="comment">Public Chat</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/connectchatapp/privatchat" activeClassName="activeClicked">
                        <CDBSidebarMenuItem icon="comment">Privat Chat</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/connectchatapp/customize" activeClassName="activeClicked">
                        <CDBSidebarMenuItem icon="cog">Customize color</CDBSidebarMenuItem>
                        </NavLink>
                    </CDBSidebarMenu>
                    </CDBSidebarContent>
                    <CDBSidebarFooter>
                            <CDBSidebarMenuItem icon="arrow-left" className="text-danger mb-5" onClick={out}>Log Out</CDBSidebarMenuItem>
                            <div className='d-flex-column text-center fs-6'>
                                <a className='linkFooterMini text-white' href="/privacypolicy">Privacy Policy</a><br />
                                <a className='linkFooterMini text-white' href="/term&condition">Term & Condition</a><br />
                                <a className='linkFooterMini text-white' href="/disclaimer">Disclaimer</a><br />
                                <p className='FooterMini text-white mt-2' >Copyright &copy; 2023 by MSH </p>
                            </div>
                    </CDBSidebarFooter>
                </CDBSidebar>
                </div>
                <div className="apps">
                <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default AppChat;
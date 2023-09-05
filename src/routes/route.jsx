import * as React from "react";
import {BrowserRouter as Router, Route,Routes,} from "react-router-dom";
import ErrorPage from "./errorroute";
import Landing from "../pages/landingpage/landing";
import P1 from "../pages/projectspage/project1";
import P2 from "../pages/projectspage/project2";
import P3 from "../pages/projectspage/project3";
import P4 from "../pages/projectspage/project4";
import P5 from "../pages/projectspage/project5";
import P6 from "../pages/projectspage/project6";
import CreatePass from "../components/createpass/createpass";
import Portal from "../components/login/login";
import PrivasiPolicy from "../components/privacyPolicy/PrivasiPolicy";
import TermandCondition from "../components/termandcondition/termandCondition";
import Disclaimer from "../components/disclaimer/disclaimer";
import AppChat from "../components/appchat/appchat";
import PublicChat from "../components/publicchat/publicchat";
import PrivatChat from "../components/privatchat/privatchat";
import StartChat from "../components/startedchat/startedchat";
import ProfileUser from "../components/profileUser/profileUser";
import CustomizeApp from "../components/customize/customize";
import DashboardAdmin from "../components/dashboardadmin/dashboardadmin";

const RoutePage = () => {
    return(
        <div className="route">
            <Router>
              <Routes>
                <Route path="*" element={<ErrorPage/>}/>
                  <Route path="/" element={<Landing/>} errorElement={<ErrorPage/>}/>
                  <Route path="/name_project_1" element={<P1/>} errorElement={<ErrorPage/>}/>
                  <Route path="/name_project_2" element={<P2/>} errorElement={<ErrorPage/>}/>
                  <Route path="/name_project_3" element={<P3/>} errorElement={<ErrorPage/>}/>
                  <Route path="/name_project_4" element={<P4/>} errorElement={<ErrorPage/>}/>
                  <Route path="/name_project_5" element={<P5/>} errorElement={<ErrorPage/>}/>
                  <Route path="/name_project_6" element={<P6/>} errorElement={<ErrorPage/>}/>
                  <Route path="/connect" element={<Portal/>} errorElement={<ErrorPage/>}/>
                  <Route path="/connectchatapp" element={<AppChat/>} errorElement={<ErrorPage/>}>
                    <Route path="/connectchatapp/startchat" element={<StartChat/>} errorElement={<ErrorPage/>}/>
                    <Route path="/connectchatapp/publicchat" element={<PublicChat/>} errorElement={<ErrorPage/>}/>
                    <Route path="/connectchatapp/privatchat" element={<PrivatChat/>} errorElement={<ErrorPage/>}/>
                    <Route path="/connectchatapp/profileuser" element={<ProfileUser/>} errorElement={<ErrorPage/>}/>
                    <Route path="/connectchatapp/customize" element={<CustomizeApp/>} errorElement={<ErrorPage/>}/>
                    <Route path="/connectchatapp/dashboardadmin" element={<DashboardAdmin/>} errorElement={<ErrorPage/>}/>
                  </Route>
                  <Route path="/Connectcrtpass" element={<CreatePass/>} errorElement={<ErrorPage/>}/>
                  <Route path="/privacypolicy" element={<PrivasiPolicy/>} errorElement={<ErrorPage/>}/>
                  <Route path="/term&condition" element={<TermandCondition/>} errorElement={<ErrorPage/>}/>
                  <Route path="/disclaimer" element={<Disclaimer/>} errorElement={<ErrorPage/>}/>
                </Routes>
          </Router>
        </div>
          
    )
}

export default RoutePage;
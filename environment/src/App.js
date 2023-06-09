import React from "react";
// import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./components/pages/Form";
import AppBar from "./components/layout/AppBar";
import Sidebar from "./components/Sidebar";
import Home from "./components/pages/Home";
import GetUser from "./components/pages/GetUser";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import CreateUser from './components/pages/CreateUser';
import EditUser from "./components/pages/EditUser";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <AppBar />
        <SidebarMenu />
        {/* <Sidebar /> */}

        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/GetUser" element={<GetUser />} />
          <Route path="/:Appln_Name/edit" element={<EditUser />} />
          {/* <Route path="/addnewuser" element={<CreateUser />} /> */}
          {/* <Route path='user/:Appln_Name/edit' element={<CreateUser/>} /> */}
          {/* <Route path='/Update/:Appln_Name' element={<Update/>}/> */}
        </Routes>

      </div>
    </BrowserRouter>
  );
};

export default App;

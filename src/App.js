import React from 'react';
import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/pages/About.js';
import Comments from './components/pages/Comments.js';
import Analyticspage from './components/pages/Analyticspage.js';
import StudentList from './components/pages/StudentList.js'; 
import Dashboard from './components/pages/Dashboard.js'
import Login from './components/pages/Login.js';
import Main from './components/Main';
import HeadNavBar from './components/HeadNavBar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import LogInForm from './components/forms/admin/LogInForm';
import CreateAccountForm from './components/forms/admin/CreateAccountForm';
import AdminSettings from './components/settings/AdminSettings';
import Home from './components/pages/Home';

function App(){

    return(
        
        <BrowserRouter>
        <HeadNavBar/>
        <Footer/>
        <Sidebar>
        <Routes>
            <Route path= "/"element={<LogInForm/>}/>
            <Route path= "dashboard"element={<Dashboard/>}/>
            <Route path= "about"element={<About/>}/>
            <Route path= "comments"element={<Comments/>}/>
            <Route path= "analyticsPage"element={<Analyticspage/>}/>
            <Route path= "productList"element={<StudentList/>}/>
            <Route path= "/CreateAccountForm"element={<CreateAccountForm/>}/>
            <Route path= "AdminSettings"element={<AdminSettings/>}/>
            </Routes>
            </Sidebar>
            </BrowserRouter>
    );

};

export default App;

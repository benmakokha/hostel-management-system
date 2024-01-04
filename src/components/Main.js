

import About from './pages/About.js';
import Comments from './pages/Comments.js';
import Analyticspage from './pages/Analyticspage.js';
import ProductList from './pages/ProductList.js'; 
import Footer from './Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeadNavBar from './HeadNavBar';

import React from 'react';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Sidebar from './Sidebar.js';
import Dashboard from './pages/Dashboard.js' 

function Main(){

    return(
        <>
        <HeadNavBar />
        <Footer />
        <Sidebar>
        
        </Sidebar>
        </>

    );

};

export default Main;

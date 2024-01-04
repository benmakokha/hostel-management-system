import React from 'react';
import LogInForm from '../forms/admin/LogInForm';
import Dashboard from './Dashboard';
import About from './About';
import Comments from './Comments';
import Analyticspage from './Analyticspage';
import ProductList from './ProductList';
import CreateAccountForm from '../forms/admin/CreateAccountForm';
import AdminSettings from '../settings/AdminSettings';
import HeadNavBar from '../HeadNavBar';
import Footer from '../Footer';
import Sidebar from '../Sidebar';
import { NavLink,Link } from 'react-router-dom';

function Home(){
    return(

        <div>
            <Sidebar>
                <NavLink to="/" element = {<LogInForm/>}></NavLink>
                <NavLink to="/dashboard" element = {<Dashboard/>}></NavLink>
                <NavLink to="/about" element = {<About/>}></NavLink>
                <NavLink to="/comments" element = {<Comments/>}></NavLink>
                <NavLink to="/analyticsPage" element = {<Analyticspage/>}></NavLink>
                <NavLink to="/productsList" element = {<ProductList/>}></NavLink>
                <NavLink to="/CreateAccountForm" element = {<CreateAccountForm/>}></NavLink>
                <NavLink to="/AdminSettings" element = {<AdminSettings/>}></NavLink>
            </Sidebar>
        </div>
    );
};

export default Home;

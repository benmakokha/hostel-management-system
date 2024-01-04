

import About from './pages/About.js';
import Comments from './pages/Comments.js';
import Analyticspage from './pages/Analyticspage.js';
import ProductList from './pages/ProductList.js'; 
import Footer from './Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeadNavBar from './HeadNavBar';
import CreateAccountForm from './forms/admin/CreateAccountForm.js';


import React from 'react';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Sidebar from './Sidebar.js';
import Dashboard from './pages/Dashboard.js' 

function Main(){

    return(
        
        <BrowserRouter>
        <HeadNavBar />
        <Footer />
        <Sidebar>
        <Routes>


            <Route path= "/"element={<Dashboard/>}/>
            <Route path= "dashboard"element={<Dashboard/>}/>
            <Route path= "about"element={<About/>}/>
            <Route path= "comments"element={<Comments/>}/>
            <Route path= "analyticsPage"element={<Analyticspage/>}/>
            <Route path= "productList"element={<ProductList/>}/>

            <Route path= "/CreateAccountForm"element={<CreateAccountForm/>}/>
        
        </Routes>
        </Sidebar>
        </BrowserRouter>
    );

};

export default Main;


mport { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
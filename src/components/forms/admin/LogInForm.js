import React from 'react';
import { Container } from 'react-bootstrap';

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function LogInForm() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () =>{ 
    setShow(true);
    alert("You Must Login");
  }

  return (
    <Container>
      <Modal show={show} onHide={handleShow}>
        <Modal.Header closeButton>
          <Modal.Title style={{marginLeft:"25%"}}><h1>Admin Login</h1></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label><h2>Email Adress</h2></Form.Label>
              <Form.Control
                type="email"
                placeholder="name@email.com"
                autoFocus
                required
                style={{padding:"20px"}}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label><h2>Password</h2></Form.Label>
              <Form.Control
                type="password"
                placeholder="password"
                autoFocus
                required
                style={{padding:"20px"}}
              />
            </Form.Group>


            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <button type="input" class="btn btn-primary btn-block" style={{marginLeft:"20%", padding:"2px 2px 10px 100px"}}>
              <h4 style ={{marginTop:"4px", marginRight:"100px"}}>Login</h4>
              </button>

            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Forgot Password?
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};


export default LogInForm;
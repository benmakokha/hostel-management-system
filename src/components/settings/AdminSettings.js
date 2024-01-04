import React from 'react';
import { Container } from 'react-bootstrap';

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function AdminSettings() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () =>{ 
    setShow(false);
    alert("Only For System Admin");
  }

  return (
    <Container>
      <Modal show={show} onHide={handleShow}>
        <Modal.Header closeButton>
          <Modal.Title style={{marginLeft:"25%"}}><h1>Admin Settings</h1></Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <button type="input" class="btn btn-primary btn-block" style={{marginLeft:"20%", padding:"2px 2px 10px 100px"}}>
              <h4 style ={{marginTop:"4px", marginRight:"100px"}}>Profile Settings</h4>
              </button>

            </Form.Group>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <button type="input" class="btn btn-primary btn-block" style={{marginLeft:"20%", padding:"2px 2px 10px 100px"}}>
              <h4 style ={{marginTop:"4px", marginRight:"100px"}}>Add student</h4>
              </button>

            </Form.Group>
              
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <button type="input" class="btn btn-primary btn-block" style={{marginLeft:"20%", padding:"2px 2px 10px 100px"}}>
              <h4 style ={{marginTop:"4px", marginRight:"100px"}}>Remove student</h4>
              </button>

            </Form.Group>


            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <button type="input" class="btn btn-primary btn-block" style={{marginLeft:"20%", padding:"2px 2px 10px 100px"}}>
              <h4 style ={{marginTop:"4px", marginRight:"100px"}}>Check debts</h4>
              </button>

            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};


export default AdminSettings;
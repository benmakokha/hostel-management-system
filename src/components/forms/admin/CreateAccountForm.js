import React, {useRef, useState} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import { Axios } from 'axios';
function CreateAccountForm(){

    const {email, setEmail} = useState();
    const {password, setPassword} = useState();
    const {passwordConfirm, setPasswordConfirm} = useState();

   const handleChange = (e) =>{
        setEmail(e.target.value);
        setPassword(e.target.value);
        setPasswordConfirm(e.target.value);

    }

   const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email);
        console.log(password);
        console.log(passwordConfirm);

        let formData; 
        formData= new formData();
        formData.append("email", email);
        //formData.append("password", password);
       // formData.append("passwordConfirm", passwordConfirm);

        const url = "http://localhost:80/reactBackend/";
        Axios.post(url, formData)
        .then(res =>console.log(res.data))
        .catch(err => console.log(err))

    }

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()

    return(

        <Container className= "d-flex align-items-center justify-content-center bg-dark"
        style={{minHeight:"75vh"}}>

            <div className="w-100" style={{maxWidth:"150vh"}}>
            
            <Card style={{padding:"35px"}}>
                <Card.Body>

                    <h1 className="text-center mb-4">Sign Up</h1>

                    <Form>
                        <Form.Group id ="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type ="email" ref ={emailRef}
                            style={{padding:"15px"}}
                            required
                            
                            />
                        </Form.Group>

                        <Form.Group id ="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type ="password" ref ={passwordRef}
                            style={{padding:"15px"}} required>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group id ="password-confirm">
                            <Form.Label>Password Confirm</Form.Label>
                            <Form.Control type ="password" ref ={passwordConfirmRef} 
                            style={{padding:"15px"}} required></Form.Control>

                        </Form.Group>
                        <Button onClick={handleSubmit} className="w-50" type ="submit" style={{padding:"15px", marginTop:"40px",marginLeft:"25%"}}>Sign Up</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className= "w-100 text-center mt-2 text-white">
                Alredy have an Account? Login
            </div>
            </div>
        </Container>

    );
};

export default CreateAccountForm;
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';




const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword (auth);


    const nameRef=useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
 
    const handleSubmit = event => {
        event.preventDefault();
        const name=nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        createUserWithEmailAndPassword(email, password);

    }
    const navigateRegister = () => {
        navigate('/login');
    }
    if(user){
        navigate('/home')
    }
    return (
        <div className='container w-50 mx-auto m-3'>
            <h2 className='text-primary text-center'>This Is Register Page</h2>
            <div>
                <Form onSubmit={handleSubmit}>
                <Form.Group className="pt-3 mb-3" controlId="formBasicName">
                    <Form.Label>Enter Your Full Name</Form.Label>
                        <Form.Control ref={nameRef} type="name" placeholder="Enter Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">                   
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control ref={passwordRef} type="password" placeholder="Confirm Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <p>Already Member??? <Link to='/login' onClick={() => navigateRegister()} className='pe-auto text-danger text-decoration-none'>Please Sign In </Link></p>
            </div>
        </div>

    );
};

export default Register;
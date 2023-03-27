import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from '../Login/SocialLogin/SocialLogin';
import { async } from '@firebase/util';




const Register = () => {
    const [agree, setAgree] = useState(false);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);


    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    if(user){
        console.log('user',user);
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        // const agree = event.target.terms.checked;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Update Profile');
        navigate('/home') 
}

    const navigateRegister = () => {
        navigate('/login');
    }


    return (
        <div className='container w-50 mx-auto m-3'>
            <h2 className='text-primary text-center'>This Is Register Page</h2>
            <div>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="pt-3 mb-3" controlId="formBasicName">
                        <Form.Control className='border border-secondary' ref={nameRef} type="name" placeholder="Enter Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3 " controlId="formBasicEmail">
                        <Form.Control className='border border-secondary' ref={emailRef} type="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control className='border border-secondary' ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                        <Form.Control className='border border-secondary' ref={passwordRef} type="password" placeholder="Confirm Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check onClick={() => setAgree(!agree)} type="checkbox" className={agree ? 'text-info' : 'text-danger'} name='terms' label="Accepts Terms And Condition" />
                    </Form.Group>
                    <Button disabled={!agree} variant="primary" type="submit">
                        Submit
                    </Button>
                    <br />
                    <p>Already Member??? <Link to='/login' onClick={() => navigateRegister()} className='pe-auto text-primary text-decoration-none'>Please Sign In </Link></p>
                    <SocialLogin></SocialLogin>
                </Form>

            </div>
        </div>

    );
};

export default Register;
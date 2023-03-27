import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
      
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigateRegister = () => {
        navigate('/register');
    }

    const forgatePassword=async () => {
        const email=emailRef.current.value;
         await sendPasswordResetEmail(email);
         alert('send mail')
    }
    if (user) {
        navigate(from, { replace: true });
    }
    if (error) {
        errorElement=
        <p className='text-danger'>Error: {error?.message}</p>
     }
    return (
        <div className='container w-50 mx-auto m-3'>
            <h2 className='text-primary text-center'>Please Log IN</h2>
            <div>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    </Form.Group> 
                    <Form.Group className="mb-3" controlId="formBasicPassword"> 
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group> 
                    <Button  variant="primary mx-auto d-flex" type="submit">
                        LOGIN
                    </Button>
                </Form>
                {errorElement}
                <p>New to MyCarweb??? <Link to='/register' onClick={() => navigateRegister()} className='pe-auto text-primary text-decoration-none'>Please Register</Link></p>
                <p>Forgate Password??? <Link to='/register' onClick={() => forgatePassword()} className='pe-auto text-primary text-decoration-none'>Reset Password</Link></p>
                 
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;
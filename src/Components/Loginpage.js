
import React from 'react';
import { Form, Row } from 'react-bootstrap'
import Header from './Header';

const Loginpage = () => {
    return (
        <div className='loginpage '>
        
           <h1 className='text-center mt-4'> Welcome To FoodHub</h1>
           <div className='loginform  justify-content-center mt-5'>
           <Row>
           <div className='col-lg-4'>
            </div>
            <div className='col-lg-4 mt-3  p-3 justify-content-center'>
                <Form>
                    <input className='form-control mt-4' type='name' placeholder='Enter your Email Address'></input>
                    <input className='form-control mt-3' type='password' placeholder='Enter your Password'></input>
                    <button className='btn btn-dark mt-3 ' style={{width:'100px'}}>Log in</button>
                    <p className='mt-3'>Don't Have an Account ?<a href=''> Sing Up</a></p>
                </Form>
            </div>
            <div className='col-lg-4'></div>
           </Row>
           </div>
        </div>
    );
}

export default Loginpage;

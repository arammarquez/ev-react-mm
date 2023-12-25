'use client'
import React, { useState } from 'react';
import './index.css'

const Login = () => {

  const [showSignUp1, setShowSignUp1] = useState(false);

  // State for the second sign-up form
  const [showSignUp2, setShowSignUp2] = useState(false);

  // Toggle function for the first sign-up form
  const toggleSignUp1 = () => {
    setShowSignUp1(!showSignUp1);
  };

  // Toggle function for the second sign-up form
  const toggleSignUp2 = () => {
    setShowSignUp2(!showSignUp2);
  };
  return (
    <div className='main_container'>
      <div className="login_container">
                <div className="login_section">
                    <div className="coustomer_form">
                        <h2>CUSTOMERS</h2>
                            <form action="" className="login_cous">
                                    <p>Already have an account?</p>
                                    <h2>Login</h2>
                                    <label htmlFor="">Email:</label>
                                    <input type="email" required/>

                                    <label htmlFor="">Password:</label>
                                    <input type="password" required/>
                                <button type="submit" className='cursor_pointer'>Login</button>

                            </form>
                            <div className="sign_btnss">
                                <p >Don’t have an account?</p>
                                <a className="cursor_pointer" onClick={toggleSignUp1}>Sign Up</a>

                            </div>
                            {showSignUp1 && (

                            <form action="" className="login_cous">
                                    <h2>Sign Up</h2>
                                    <label htmlFor="">Email:</label>
                                    <input type="email" required/>

                                    <label htmlFor="">Password:</label>
                                    <input type="Password" required/>

                                    <label htmlFor="">confirm Password:</label>
                                    <input type="Password" required/>
                                <button type="submit" className='form_btn'>Sign Up</button>

                            </form>
                            )}
                        </div>

                        <div className="coustomer_form yellow_bg">
                            <h2>ORGANIZERS</h2>
                            <form action="" className="login_cous" >
                                    <p>Already have an account?</p>
                                    <h2>Login</h2>
                                    <label htmlFor="">Email</label>
                                    <input type="email" required/>

                                    <label htmlFor="">Password</label>
                                    <input type="password" required/>
                                <button type="submit" className='cursor_pointer'>Login</button>

                            </form>
                            <div className="sign_btnss">

                                <p>Don’t have an account?</p>
                                <a className="cursor_pointer" onClick={toggleSignUp2}>Sign Up</a>
                            </div>
                            {showSignUp2 && (

                            <form action="" className="login_cous" >
                                    <h2>Sign Up</h2>
                                    <label htmlFor="">First Name:</label>
                                    <input type="text"/>
                                    <label htmlFor="">Last Name:</label>
                                    <input type="text"/>
                                    <label htmlFor="">Business Name:</label>
                                    <input type="text"/>
                                    <label htmlFor="">role:</label>
                                    <div className="sign_up_btns">
                                        <button>Organizer</button>
                                        <button>Venue</button>
                                        <button>Other</button>
                                    </div>


                                    <label htmlFor="">Email</label>
                                    <input type="email" required/>

                                    <label htmlFor="">Password</label>
                                    <input type="Password" required/>

                                    <label htmlFor="">confirm Password</label>
                                    <input type="Password" required/>
                                <button type="submit">Sign Up</button>

                            </form>
                            )}
                        </div>
                </div>
            </div>
    </div>
  )
}

export default Login

import React, { useState } from 'react'
import styled from 'styled-components';
import { Link,useHistory } from 'react-router-dom';
import { auth } from "./firebase";

function Login() {
    const history = useHistory();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const login = event => {
        event.preventDefault();      // this stops the refresh
        // do the login logic...

        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                //logged in, redirect to homepage...
                history.push('/');
            })
            .catch(e => alert(e.message));
    };

    const register = event => {
        event.preventDefault();      // this stops the refresh
        // do the register logic

        auth.createUserWithEmailAndPassword(email, password)
            .then(auth => {
                // created a user and logged in, redirect to the homepage...
                history.push('/');
            })
            .catch(e => alert(e.message));
    };

    return (
        <LoginPage>
            <div class="login">
                <Link to="/">
                    <img 
                    class="login__logo"
                    src="../images/logo_login.png" alt="" />
                </Link>
                <div className="login__container">
                    <h1>Sign in</h1>
                    <form>
                        <h5>E-mail</h5>
                        <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
                        <h5>Password</h5>
                        <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
                        <button onClick={login} type='submit' class="login__signInButton">Sign In</button>
                    </form>
                    <p>
                        By signing-in you agree the Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                    </p>
                    <button onClick={register} class="login__registerButton">Create Your Amazon Account</button>
                </div>
            </div>
        </LoginPage>
    )
}

export default Login

const LoginPage = styled.div`
    .login{
        background-color:white;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .login__container{
        width:300px;
        display:flex;
        height: fit-content;
        flex-direction: column;
        padding:20px;
        border: 1px solid lightgray;
        h1{
            font-weight: 500;
            margin-bottom: 20px;
        }
        form h5{
            margin-bottom: 5px;
        }
        form input{
            height: 30px;
            margin-bottom: 10px;
            background-color: white;
            width: 98%;
        }
        p{
            margin-top:15px;
            font-size: 12px;
        }
        .login__signInButton{
            background-color: #F0C14B;
            border: 1px solid;
            border-radius:2px;
            width:100%;
            height:30px;
            margin-top:10px;
            border-color:#A88734 #9C7E31 #846A29;
            cursor: pointer;
        }
        .login__registerButton{
            border: 1px solid;
            border-radius:2px;
            width:100%;
            height:30px;
            margin-top:10px;
            border-color:#A88734 #9C7E31 #846A29;
        }
    }
    .login__logo{
        margin: 20px 0;
        width:100px;
        object-fit:contain;
    }
`
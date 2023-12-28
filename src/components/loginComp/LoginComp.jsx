import React, {useState} from 'react';
import '../loginComp/LoginComp.css';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUserName } from '../../features/userName';



const LoginComp = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [registerStatus, setRegisterStatus] = useState('');
const [loginStatus, setLoginStatus] = useState('');

    const Login = () => {
   
        Axios.post("http://localhost:3001/login", {
            email: email,
            user_password: password
        }).then((response) => {
            if (response.data.message) {
                setLoginStatus(response.data.message)
            } else {
                setLoginStatus(response.data[0].email)
                dispatch(getUserName({username : response.data[0].email}))
                navigate('/home')
            }
        })
    }

    const Register = () => {
   
        Axios.post("http://localhost:3001/register", {
            email: email,
            user_password: password
        }).then((response) => {
            if (response.data.message) {
                setRegisterStatus(response.data.message)
            } else {
                setRegisterStatus("Account Created")
            }
        })
    }

  return (
    <div className='login-comp'>
        <div className='login-title'>Login/Register</div>
        <div>{loginStatus ? (<div>welcome {loginStatus}</div>):(<div>simple redux cart app</div>)}</div>
        <div className='login-inputs'>
            <input onChange={(e)=>{setEmail(e.target.value)}} placeholder='email : admin@test.com' className='email-input input-login'></input>
            <input onChange={(e)=>{setPassword(e.target.value)}} placeholder='password : admin' className='password-input input-login'></input>
        </div>
        <div onClick={Login} className='login-btn'>Login</div>
        {/* <div onClick={Register} className='login-btn'>Register</div> */}
    </div>
  )
}

export default LoginComp
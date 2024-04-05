import {React,useRef } from 'react'
import './style2.css';
import { Link } from 'react-router-dom'
import backEndAxios from '../backEndAxios'
function Register() {
  const userNameRef = useRef(null);
  const PasswordRef = useRef(null);
  const CpasswordRef = useRef(null);
  const emailRef = useRef(null);
  const mobileRef = useRef(null);


    const handleSubmit = (e)=>{
          e.preventDefault();
        try {
             let UserData = {
                  userName : userNameRef.current.value,
                  password : PasswordRef.current.value,
                  Cpassword : CpasswordRef.current.value,
                  email :  emailRef.current.value,
                  mobile : mobileRef.current.value,
             }
             console.log(UserData)
             if(UserData.password == UserData.Cpassword){
                console.log("password match")
                backEndAxios.post('/Register',UserData).then((response)=>{
                    console.log(response)
                })
             }else{
              console.log("password not matching")
             }

        } catch (error) {
          console.log(error)
        }
    }
  return (
    <div className='register'>
    <h3>REGISTER</h3>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Username' ref={userNameRef}/>
        <input type="password"placeholder='Password' ref={PasswordRef} />
        <input type="password" placeholder='Confirm password'  ref={CpasswordRef}/>
        <input type="email" placeholder='E-mail'  ref={emailRef}/>
        <input type="number" placeholder='Mobile' ref={mobileRef} />
            <button type='submit' className='regBtn'>Register</button>
    </form>
</div>
  )
}

export default Register
import React, { useRef } from 'react'
import './style2.css'
import { Link } from 'react-router-dom';
import backEndAxios from '../backEndAxios'
import { useNavigate } from 'react-router-dom';
function Login() {


  const UsernameRef = useRef(null)
  const Passwordref = useRef(null)

  const navigate = useNavigate()

  const handleSubmit = (e)=>{
    e.preventDefault();
    try {
      let UserData = {
        userName :UsernameRef.current.value,
        password : Passwordref.current.value,
      }
      console.log(UserData)
      backEndAxios.post('/Login',UserData).then((response)=>{
        console.log(response)
        if(response.data){
          let userdata =  JSON.stringify(response.data)
          console.log(userdata,"string-------")
          localStorage.setItem('Auth_info',userdata)
          navigate('/home')
        }
      })

    } catch (error) {
     
    }
  }
  return (
    <div className='login'>
    <h3>LOGIN</h3>
    <form onSubmit={handleSubmit}>
    <input type="text" placeholder='Username' ref={UsernameRef}/>
    <input type="password"placeholder='Password' ref={Passwordref} />
    <button className='lbutton' type='submit'>Login</button>
    </form>
</div>
  )
}

export default Login

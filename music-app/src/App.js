import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import Card from './Components/Card'
import axios from'./Axios'
import { Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Login from './Components/Login'
import Register from './Components/Register'


function App() {
//   const clientid='e01ef8902b3746fd875acd91bf848c5b'
// const clientsecret='1fed95216b4a4cee9313317bc60b2de2'
//   const [token,setToken] = useState('')
//   useEffect(()=>{
//     try {
//       var authParameters ={
//         method:'POST',
//         headers:{
//           'Content-Type':'application/x-www-form-urlencoded'
//         },
//           body:'grant_type=client_credentials&client_id='+ clientid + '&client_secrets=' + clientsecret

//       }
//           fetch('https://accounts.spotify.com/api/token',authParameters)
//           .then(result => result.json())
//           .then(data =>{
//             console.log(data)
//             setToken(data.access_token)
//           })
//         } catch (error) {
      
//     }
//   },[])
  return (
    <>
    <Routes>
      <Route path= '/home' element={<Home/>} />
      <Route path= ''element={<Login/>} />
      <Route path= '/register' element={<Register/>} />

    </Routes>
    
   
      {/* <Navbar/>
      <Card/>  */}
    
    
    </>
  )
}

export default App

import React, { useEffect, useState } from 'react';
import './style.css';
import { IoHomeSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { MdOutlineLibraryMusic } from "react-icons/md";
import { FaCrown } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
function Navbar() {
  const navigate = useNavigate()
  const [user, setUser] = useState(''); // Initialize user state with an empty object
  const logout = (req,res)=>{
      try {
        localStorage.removeItem('Auth_info');
        setUser('')
        navigate('/')
      } catch (error) {
        console.log(error)
      }
  }
  useEffect(() => {
    try {
      let userData = localStorage.getItem('Auth_info');
      if (userData) {
        userData = JSON.parse(userData); // Remove redeclaration
        console.log(userData, "from nav usr");
        setUser(userData); // Use functional update to correctly handle asynchronous state update
        console.log(user, "from nav usr");
      }
    } catch (error) {
      console.log(error);
    }
  }, []); // Empty dependency array to run only once on component mount

  return (
    <div className='nav'>
      <div className='icons'><IoHomeSharp /><br />
        <div className='nav_options'>Home</div>
      </div>
      <div className='icons'><FaSearch /><br />
        <div className='nav_options'>Search</div>
      </div>
      <div className='icons'><MdOutlineLibraryMusic /><br />
        <div className='nav_options'>Your Library</div>
      </div>
      <div className='icons'><FaCrown /> <br />
      { user ?
          <div className='nav_options'>{user.userName}</div> :
          <div className='nav_options'>premium</div>
      }
      
        {/* <div className='nav_options'>{user.userName}</div> */}
      </div>
      {
        user ? <div className='nav_options' onClick={logout}>Logout</div> : ""
      }
    </div>
  );
}

export default Navbar;

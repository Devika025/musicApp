import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube';
import './style.css';
import cardimage from '../images/song.jpg';
import cardimg2 from '../images/song2.jpg';
import cardimg3 from '../images/song3.jpg';
import cardimg4 from '../images/song4.jpg';
import cardimg5 from '../images/song5.jpg';
import cardimg6 from '../images/image1.jpg';
import image1 from '../images/songs6.jpg';
import image2 from '../images/songs7.jpg';
import image3 from '../images/songs8.jpg';
import image4 from '../images/songs9.jpg';
import image5 from '../images/songs10.jpg';
import image6 from '../images/image2.jpg';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import img5 from '../images/img5.jpg';
import img6 from '../images/image3.jpg';
import { CiPlay1 } from "react-icons/ci";

import Axios from '../Axios'
function Card() {
  const[data,setData] = useState([])
  const[url,setUrl] = useState('')

  useEffect(() => {
    let api_key = "AIzaSyAeeRy4ycMEInjZifcy3LgjzCHSaQd7J9M";
    let url =`/playlistItems?part=snippet&playlistId=PL4fGSI1pDJn4pTWyM3t61lOyZ6_4jcNOw&key=${api_key}`
    
    try {
      Axios.get(url).then((response)=>{
            if(response){
              console.log(response.data,"-----")
              setData(response.data.items)
              console.log(data,"data--- from state")
            }else{
              console.log("no response")
            }
      })
    } catch (error) {
      console.log(error)
    }
  }, [])
  const getVedioId =(id)=>{
      console.log("id found",id)
      setUrl(id);

  }
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
    <>
    <div className='hdng1'>
        <h2>Made Just For you</h2>
    </div>
    {
              url ? <YouTube videoId={url} opts={opts} /> :''
            }
                <div className='cards'>
                  {
                    data.map((obj)=>{
                      return(
                        <>
                          <div className='card'>
                              <img src={obj.snippet.thumbnails.default.url} alt=""  onClick={()=>getVedioId(obj.snippet.resourceId.videoId)}/>
                              <div className='image_text'>
                             {obj.snippet.title}
                            </div>
                              <button className='plyBtn' onClick={()=>getVedioId(obj.snippet.resourceId.videoId)}><CiPlay1 /> Play</button>
                        </div>
                        
                        </>
                      )
                    })
                  }  

            </div>
            
            <div className='cards'>
                  {
                    data.map((obj)=>{
                      return(
                        <>
                          <div className='card'>
                <img src={obj.snippet.thumbnails.default.url} alt="" onClick={()=>getVedioId(obj.resourceId.videoId)} />
                              <div className='image_text'>
                             {obj.snippet.title}
                            </div>
                        </div>
                        
                        </>
                      )
                    })
                  }  

            </div>
           
    </>   
    
  )
}

export default Card
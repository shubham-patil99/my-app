import React from 'react';
import MyImg from '../images/shubhamp.png'
import About from './about';


function Home() {


  return (
    <>
    <div className='row hero-sec background-img'>
      <div className='center-text col' style={{marginTop:"10rem"}}>
        <h1 className='page-title'>HI, I'M<br /> SHUBHAM</h1>
        <p className='para1'>
        I am a Web developer who is professional<br /> of designing and createing<br /> websites or web applications.
        </p>
      </div>

      <div className='left-text col' style={{marginRight:"0px"}}>
       <img style={{float:"right", marginRight:"0px", paddingTop:"4rem"}} src={MyImg} alt="shubham"></img>
        
      </div>
      </div>  
      <About />
    </>
  );
}

export default Home;
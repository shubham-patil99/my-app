import React from 'react';
import MyImg from '../images/shubhamp.png'
import About from './about';


function Home() {


  return (
    <>
    <section className='row hero-sec'>
      <div className='col m-t-2' style={{ padding:"10rem"}}>
        <h1 className='page-title '>HI, I'M<br /> SHUBHAM</h1>
        <p className='para1'>
        I am a Web developer who is professional   of designing and createing    websites and web applications.
        </p>
      </div>

      <div className='col' style={{marginRight:"0px"}}>
       <img style={{float:"right", marginRight:"0px", paddingTop:"14.9rem"}} src={MyImg} alt="shubham"></img>
        
      </div>
      </section>  
      <About />
    </>
  );
}

export default Home;
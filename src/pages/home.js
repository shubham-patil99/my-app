import React from 'react';
import Button from '../componants/button';
import { useEffect, useState } from 'react';



function Home() {

  const [data, setData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/');
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);

  const top10Records = data.slice(0, 10);

  return (
    <>
      <div >
        <h1 className='page-title'>Elevate Your Online Presence with Our Comprehensive Solutions</h1>

        <p className='para1'>
          Welcome to IMC, where innovation meets excellence! We
          are a dynamic marketing company committed to transforming your digital
          presence and driving your business growth. Indian Marketing Company is Specializing in a range of
          services, including web development, digital marketing, SEO, and SaaS
          app development, we tailor solutions that align perfectly with your
          unique goals and objectives.
        </p>
      </div>
    </>
  );
}

export default Home;
import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {

    const [data, setData] = useState({});
  
    const getData = async () => {
    try { 
      const URL = `https://ipgeolocation.abstractapi.com/v1/?api_key=${process.env.REACT_APP_ABSTRACT_KEY}`;
      const res  = await axios(URL);
      setData(res.data);
    } 
    catch (err) {
    throw new Error('Unable to get a token.')
  }
    };
  
    useEffect(() => {
        getData();
    }, []);

  console.log(`https://ipgeolocation.abstractapi.com/v1/?api_key=${process.env.REACT_APP_ABSTRACT_KEY}&postal_code=94103`);
  console.log(data);

  return (
    <div>
     <h1>Home {data.ip_address}</h1>
    </div>
  )
}

export default Home
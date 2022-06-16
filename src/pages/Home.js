import React, { useEffect, useState } from "react";
import CardsContainer from "../components/CardsContainer";
import axios from "axios";

const Home = () => {

    // const [data, setData] = useState({});
    const [weather, setWeather] = useState({});
    const [city, setCity] = useState('');
  
  //   const getData = async () => {
  //   try { 
  //     const URL = `https://api.geoapify.com/v1/geocode/search?city="San Diego"&apiKey=${process.env.REACT_APP_GEOAPIFY_KEY}`;
  //     const res  = await axios(URL);
  //     setData(res.data);
  //   } 
  //   catch (err) {
  //   throw new Error('Unable to get a token.')
  // }
  //   };

    const getWeather = async () => {
      try { 
        const URL = `https://api.weatherbit.io/v2.0/forecast/daily?city=Berlin&key=${process.env.REACT_APP_WEATHERBIT_KEY}`;
        const res  = await axios(URL);
        setWeather(res.data.data);
        setCity(res.data.city_name);
      } 
      catch (err) {
      throw new Error('Unable to get a token.')
    }
      };
  
    useEffect(() => {
        // getData();
        getWeather();
    }, []);

  // console.log(`https://ipgeolocation.abstractapi.com/v1/?api_key=${process.env.REACT_APP_ABSTRACT_KEY}&postal_code=94103`);
  // console.log(data);
  // console.log(weather)
  // console.log(`https://api.weatherbit.io/v2.0/forecast/daily?city=Frankfurt&key=${process.env.REACT_APP_WEATHER_BIT_KEY}`);
  console.log(process.env.REACT_APP_WEATHERBIT_KEY);

  return (
    <>
      <CardsContainer 
      weather={ weather } 
      city={ city }/>
    </>
  )
}

export default Home
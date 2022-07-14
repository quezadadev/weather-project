import React, { useEffect, useState } from "react";
import CardsContainer from "../components/CardsContainer/CardsContainer";
import axios from "axios";

const Home = () => {

    const [weather, setWeather] = useState({});
    const [city, setCity] = useState('');
    const [newSearch, setNewSearch] = useState('')

    const handleSearch = (e)=> {
      setNewSearch(e.target.value);
    };

    const handleCity = (input)=> {
      setCity(input);
    };


    const getWeather = async () => {
      try { 
        const URL = `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${process.env.REACT_APP_WEATHERBIT_KEY}`;
        const res  = await axios(URL);
        setWeather(res.data.data);
        setCity(res.data.city_name);
      } 
      catch (err) {
      throw new Error('Unable to get a token.')
    }
      };

    useEffect(() => {
        getWeather();
    }, []);

  console.log(process.env.REACT_APP_WEATHERBIT_KEY);

  return (
    <>
      <CardsContainer 
      weather={ weather } 
      city={ city }
      newSearch={newSearch}
      handleSearch={handleSearch}
      handleCity={handleCity}
      />
    </>
  )
}

export default Home
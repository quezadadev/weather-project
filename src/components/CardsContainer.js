import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
import { Button, Card, CardBody, CardGroup,CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap';

const CardsContainer = ({ weather, city }) => {
  console.log('The Weather');
  const [newSearch, setNewSearch] = useState('')

  const handleSearch = (e)=> {
    setNewSearch(e.target.value);
  };

  
  // Filter for 7 days
  const sevenDayForecast = [];

  for (let i = 0; i < 7; i++){
    sevenDayForecast.push(weather[i]);
  }
  console.log(sevenDayForecast);

  // Convert Celsius to Fahrenheit
  const toFahrenheit = (celsius) => {
    return Math.round((celsius * 1.8) + 32);
  }

  // const handleClick = () => {
  //   navigate("/cards/:id");
  // }

  return (
    <div style={{"max-width": "80%", "margin": "0 auto"}}>
      <h3 className='mt-5 mb-5 text-secondary d-flex justify-content-center'> { city } </h3>
      <Search
          newSearch={newSearch} 
          handleSearch={handleSearch}
          />
       <CardGroup>
      { sevenDayForecast.map( obj => {
        return <Card  className='m-2'>
        <>
        <Link to='cards/'>
        <CardImg
          alt="Card image cap"
          src="https://picsum.photos/318/180"
          top
          width="100%"
        />
        
        <CardBody>
          <CardTitle tag="h5">
            {/* <p>{ toFahrenheit(obj.high_temp) } Degrees </p> */}
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
          >
            <a href="http://cliparts.co/clipart/3674971" title="Image from cliparts.co"><img style={{"max-width": "80%"}} src="http://cliparts.co/cliparts/yik/rbK/yikrbKRaT.gif" width="350" alt="Cloudastound.GIF" /></a>
          </CardSubtitle>
         
          <Button className='btn-primary'>
            Weather Byte
          </Button>
        </CardBody>
        
        </Link>
        </>
        </Card>
      })}
      </CardGroup>
    </div>
  )
}

export default CardsContainer;
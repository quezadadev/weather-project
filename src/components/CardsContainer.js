import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup,CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap';

const CardsContainer = ({ weather, city }) => {
  console.log('The Weather');
  // Filter for 7 days
  const sevenDayForecast = [];

  for (let i = 0; i < 7; i++){
    sevenDayForecast.push(weather[i]);
  }
  console.log(sevenDayForecast);

  // covert
  const toFahrenheit = (celsius) => {
    return (celsius * 1.8) + 32
  }

  return (
    <div style={{"max-width": "90%"}}>
      <h2> { city } </h2>
       <CardGroup>
      { sevenDayForecast.map( obj => {
        return  <Card>
        <CardImg
          alt="Card image cap"
          src="https://picsum.photos/318/180"
          top
          width="100%"
        />
        <CardBody>
          <CardTitle tag="h5">
            { toFahrenheit(obj.high_temp) }
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
          >
            Card subtitle
          </CardSubtitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </CardText>
          <Button>
            Button
          </Button>
        </CardBody>
            </Card>
      })}
      </CardGroup>
    </div>
  )
}

export default CardsContainer;
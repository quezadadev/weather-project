import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Card, CardBody, CardColumns,CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap';

const CardPage = () => {
  
  const navigate = useNavigate();
  // const location = useLocation();
  // const {  } =  location.state;
  

  const handleClick = () => {
    navigate('/');
  }

  return (
    <CardColumns>
    <Card>
      <CardImg
        alt="Card image cap"
        src="https://picsum.photos/256/186"
        top
        width="100%"
      />
      <CardBody>
        <CardTitle tag="h5">
          Card title
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
    <Card>
      <CardImg
        alt="Card image cap"
        src="https://picsum.photos/256/186"
        top
        width="100%"
      />
    </Card>
    <Card>
      <CardBody>
        <CardTitle tag="h5">
          Card title
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          Card subtitle
        </CardSubtitle>
        <CardText>
          This card has supporting text below as a natural lead-in to additional content.
        </CardText>
        <Button>
          Button
        </Button>
      </CardBody>
    </Card>
    <Card
      body
      inverse
      style={{
        backgroundColor: '#333',
        borderColor: '#333'
      }}
    >
      <CardTitle tag="h5">
        Special Title Treatment
      </CardTitle>
      <CardText>
        With supporting text below as a natural lead-in to additional content.
      </CardText>
      <Button>
        Button
      </Button>
    </Card>
    <Card>
      <CardImg
        alt="Card image cap"
        src="https://picsum.photos/256/186"
        top
        width="100%"
      />
      <CardBody>
        <CardTitle tag="h5">
          Card title
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          Card subtitle
        </CardSubtitle>
        <CardText>
          This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
        </CardText>
        <Button>
          Button
        </Button>
      </CardBody>
    </Card>
  </CardColumns>
  )
}

export default CardPage;
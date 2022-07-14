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
    <CardColumns className='mb-5 mt-5'>
    <Card style={{"max-width": "50%", "margin": "0 auto"}}>
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
            <a href="http://cliparts.co/clipart/3674971" title="Image from cliparts.co"><img style={{"max-width": "95%"}} src="http://cliparts.co/cliparts/yik/rbK/yikrbKRaT.gif" width="350" alt="Cloudastound.GIF" /></a>
          </CardSubtitle>
         
          <Button className='btn-primary'>
            Weather Byte
          </Button>
        </CardBody>
        
    </Card>
   </CardColumns> 
  )
}

export default CardPage;
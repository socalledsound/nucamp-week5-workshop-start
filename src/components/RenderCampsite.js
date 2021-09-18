import React from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

const RenderCampsite = ({campsite}) => {
    return ( 
        <div className="col-md-5 m-1">
        <Card>
            <CardImg top src={campsite.image} alt={campsite.name} />
            <CardBody>
                <CardTitle>{campsite.name}</CardTitle>
                <CardText>{campsite.description}</CardText>
            </CardBody>
        </Card>
    </div>
     );
}
 
export default RenderCampsite;
import React from 'react'
import {  Card, Media } from 'reactstrap';
function RenderPartner({partner}) {
    if (partner) {
        return (
            <React.Fragment>
                <Media object src={partner.image} alt={partner.name} width="150" />
                <Media body className="ml-5 mb-4">
                    <Media heading>{partner.name}</Media>
                    {partner.description}
                </Media>
            </React.Fragment>
        );
    }
    return <div />;
}

export default RenderPartner

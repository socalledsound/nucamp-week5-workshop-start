import React, { Component } from 'react';

class CampsiteInfo extends Component {
    render() {
        if (this.props.campsite) {
            return <div className="row" />;
        }
        return <div />;
    }
}

export default CampsiteInfo;
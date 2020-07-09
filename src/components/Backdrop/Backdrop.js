import React from 'react';

import './Backdrop.scss';

const backdrop = props => {
    return (
        <div className="backdrop" onClick={props.click}/>
    );
}

export default backdrop;
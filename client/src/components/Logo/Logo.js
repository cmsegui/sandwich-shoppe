import React from 'react';
import sandwichLogo from '../../assets/images/sandwich-logo.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={sandwichLogo} alt="SandwichLogo" />
    </div>
);



export default logo;
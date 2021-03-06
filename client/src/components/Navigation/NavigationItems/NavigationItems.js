import React from 'react';
import classes from './NavigationItems.css';
import NavItem from './NavItem/NavItem'

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavItem link="/" exact>Sandwich Builder</NavItem>
        <NavItem link="/orders">Orders</NavItem>
    </ul>
);


export default navigationItems;
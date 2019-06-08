import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';


const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem exact link="/" >Burger Builder </NavigationItem>
       { props.isAuthenticated ? <NavigationItem exact link="/orders">Orders</NavigationItem> : null }
       { !props.isAuthenticated 
            ? <NavigationItem exact link="/auth">Login</NavigationItem>
            : <NavigationItem exact link="/logout">Logout</NavigationItem> }
    </ul>
);

export default navigationItems;

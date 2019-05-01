import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import MenuToggle from '../MenuToggle/MenuToggle';
import classes from './Toolbar.module.css';


const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <MenuToggle clicked={props.open} />
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;
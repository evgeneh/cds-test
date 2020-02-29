import React from 'react';

import {makeStyles} from  '@material-ui/core'

import {IconButton, AppBar, Toolbar, Typography} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));


const APPHeader = ({headerText}) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography  color="inherit" className={classes.flex}>
                        {headerText}
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}


export default APPHeader;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 10,
    },

    placeholder: {
        height: 40,
        padding: 5,
    },
}));

export default function Preloader({labelText}) {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <Typography>{labelText || 'Загрузка'}</Typography>
            <div className={classes.placeholder}>
                <CircularProgress disableShrink/>
            </div>
        </div>
    );
}

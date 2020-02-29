import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({

    title: {
        flexGrow: 1,
        paddingTop: 5,
    },
}));

//крайняя крошка должна быть некликабельной
const AppBreadcrumbs = ({breadcrumbs, handleClick}) => {
    const classes = useStyles();

    return (
        <Breadcrumbs aria-label="breadcrumb" className={classes.title}>
            {
                breadcrumbs.map((crumb, index) => {
                    console.log(breadcrumbs.length + " " +index)
                    return (parseInt(breadcrumbs.length) === index + 1) ?
                        <Typography color="textPrimary" key={crumb.id}>{crumb.title}</Typography>
                        :
                        <Link href="#" color="inherit"  key={crumb.id} onClick={handleClick.bind(null, crumb.id)}>
                            {crumb.title}
                        </Link>
                })
            }
        </Breadcrumbs>
    );
}

export default AppBreadcrumbs

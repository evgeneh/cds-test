import React from 'react';

import {makeStyles} from  '@material-ui/core'

import {IconButton, AppBar, Toolbar, Typography} from '@material-ui/core'

import APPHeader from "../header/Header"
import Preloader from "../Preloader";


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


const ProjectList = ({projectList}) => {

    const classes = useStyles();


    if (!projectList)
        return <Preloader labelText={'Загрузка списка проектов'} />

    return (
        <div className={classes.root}>
            <APPHeader />
            {
                    projectList.map((project) => {
                        return <div key={project.id}>{project.title}</div>
                    })
            }
        </div>
    );
}


export default ProjectList;

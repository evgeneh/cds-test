import React from 'react';

import {makeStyles} from  '@material-ui/core'

import {IconButton} from '@material-ui/core'

import ListItem from "@material-ui/core/ListItem"
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';



const useStyles = makeStyles(theme => ({

    iconButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        paddingLeft: 5,
    },
}));

export const ProjectListItem = ({text, hasDocument=true, allowDelete, stageList, openHandler}) => {
    const classes = useStyles();

    return (
        <ListItem>
            {
                (hasDocument) &&
                <IconButton onClick={openHandler}>
                    <Avatar>
                        <FolderIcon/>
                    </Avatar>
                </IconButton>
            }
            <ListItemText className={classes.title}
                primary={text}
            />
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete" onClick={openHandler} >
                    {
                        (allowDelete) ?
                            <DeleteIcon/>
                            :
                            <ArrowForwardIosIcon />
                    }
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}


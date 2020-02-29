import React from 'react';

import {makeStyles} from  '@material-ui/core'

import {IconButton} from '@material-ui/core'

import ListItem from "@material-ui/core/ListItem"
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';



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

export const ProjectListItem = ({text, hasDocument=true, allowDelete, stageList, openHandler}) => {

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
            <ListItemText
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


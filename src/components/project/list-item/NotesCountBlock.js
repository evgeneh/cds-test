import React from 'react';
import Box from '@material-ui/core/Box';
import {IconButton} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    iconButton: {
        marginRight: theme.spacing(0.5),
    },
    button: {
        display: 'inline-block',
        paddingTop: 5,
        minHeight: 0,
        minWidth: 0,
        width: 40,
    }

}));

const IconNotesCntr = ({value, color}) => {
    const classes = useStyles();
    return (
        <IconButton edge="end" aria-label="delete" >
            <label htmlFor="outlined-button-file">
                <Button className={classes.button}
                        style={{border: `2px solid ${color}`}}>
                    {value}
                </Button>
            </label>
        </IconButton>)
}


export default function NotesCntrBlock({notes_cnt_danger, notes_cnt_warning, notes_cnt_success}) {
    return (
        <>
           <IconNotesCntr value={notes_cnt_danger} color={'red'} />
            <IconNotesCntr value={notes_cnt_warning} color={'yellow'} />
            <IconNotesCntr value={notes_cnt_success} color={'green'} />
        </>
    );
}

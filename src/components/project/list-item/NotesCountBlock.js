import React from 'react';

import Button from '@material-ui/core/Button';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({

        button: {
            marginRight: theme.spacing(1),
            display: 'inline-block',
            paddingTop: 5,

            minHeight: 0,
            minWidth: 40,
        }

    })
);

const IconNotesCntr = ({value, color}) => {
    const classes = useStyles();
    return (

            <label htmlFor="outlined-button-file">
                <Button className={classes.button}
                        style={{border: `2px solid ${color}`}}>
                    {value}
                </Button>
            </label>
       )
}


export default function NotesCntrBlock({notes_cnt_danger, notes_cnt_warning, notes_cnt_success}) {
    return (
        <>
            <IconNotesCntr value={notes_cnt_danger} color={'red'}/>
            <IconNotesCntr value={notes_cnt_warning} color={'yellow'}/>
            <IconNotesCntr value={notes_cnt_success} color={'green'}/>
        </>
    );
}

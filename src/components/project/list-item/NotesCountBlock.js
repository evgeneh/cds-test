import React from 'react';
import Box from '@material-ui/core/Box';

const defaultProps = {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
    m: 1,
    border: 1,
    style: { width: '5rem', height: '5rem' },
};

export default function NotesCountBlock() {
    return (
        <Box display="flex" justifyContent="center">
            <Box borderRadius={16} {...defaultProps} >16</Box>
            <Box borderRadius={16} {...defaultProps} >16</Box>
            <Box borderRadius={16} {...defaultProps} >16</Box>
        </Box>
    );
}

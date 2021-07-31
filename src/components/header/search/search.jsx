import React from 'react';
import './search.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            width: '100%',
        },
    },
}));

export function Search() {
    const classes = useStyles();

    return (
        <div className="search">
            <form className={classes.root} noValidate autoComplete="off">
                <TextField
                    id="standard-basic"
                    label="Let's find something..."
                    className="search__textFiled"
                />
            </form>
        </div>
    );
};
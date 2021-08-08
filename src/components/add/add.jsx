import React from 'react';
import './add.css';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: '25px 0',
            width: '100%',
            color: '#005161'
        },
    },
}));

export function AddPost( {addPost, inputChange, value} ) {
    const classes = useStyles();
    const btnTitle = 'New post'

    return (
        <div className="add">
            <form className={classes.root} noValidate autoComplete="off">
                <Input
                    placeholder="Write your task..."
                    inputProps={{ 'aria-label': 'description' }}
                    value={ value }
                    onChange={ (e) => inputChange(e) }/>
                <Button
                    className="add__btn"
                    variant="contained"
                    color="primary"
                    onClick={ () => addPost(value) }>

                    { btnTitle }
                </Button>
            </form>
        </div>
    )
}
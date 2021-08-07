import React from 'react';
import './posts.css';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import { Post } from "./post/post"

// const dateNow = new Date().toJSON().slice(0,10).replace(/-/g,'/')

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        marginTop: '25px',
        boxShadow: '-5px 5px 0 0 rgba(83, 83, 83, 0.42)',
        backgroundColor: theme.palette.background.paper,
    },
    padding: {
        padding: '0'
    }
}));

export function Posts() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <List component="nav" className={classes.padding}>
                <Post label="task 1" id="1" important />
                <Post label="task 2" id="1" />
                <Post label="task 3" id="1" />
                <Post label="task 4" id="1" />
            </List>
        </div>
    );
}
import React from 'react';
import './post.css'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from "@material-ui/core/Divider";
import DeleteIcon from '@material-ui/icons/Delete';
import StarBorder from '@material-ui/icons/StarBorder';

// const dateNow = new Date().toJSON().slice(0,10).replace(/-/g,'/')


export function Post() {

    return (
        <div>
            <ListItem>
                <ListItemText primary="Task 1" className="text" />
                <StarBorder className="star" />
                <DeleteIcon className="delete" />
            </ListItem>
            <Divider />
        </div>
    );
}
import React from 'react';
import './post.css'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from "@material-ui/core/Divider";
import DeleteIcon from '@material-ui/icons/Delete';
import StarBorder from '@material-ui/icons/StarBorder';

// const dateNow = new Date().toJSON().slice(0,10).replace(/-/g,'/')


export function Post(props) {

    const {id, label, important} = props;
    const classlist = important ? "star star_filled" : "star";


    return (
        <div className="post">
            <ListItem key={id}>
                <ListItemText primary={label} className="text"  />
                <StarBorder className={classlist} />
                <DeleteIcon className="delete" />
            </ListItem>
            <Divider />
        </div>
    );
}
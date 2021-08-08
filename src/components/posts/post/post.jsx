import React, {useState} from 'react';
import './post.css'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from "@material-ui/core/Divider";
import DeleteIcon from '@material-ui/icons/Delete';
import StarBorder from '@material-ui/icons/StarBorder';

// const dateNow = new Date().toJSON().slice(0,10).replace(/-/g,'/')


export function Post(props) {
    const {label, important, deletePost, urgentPost} = props;
    let classlist = important ? "star star_filled" : "star";

    return (
        <div className="post">
            <ListItem>
                <ListItemText primary={ label } className="text"  />
                <StarBorder
                    onClick={ urgentPost }
                    className={ classlist } />
                <DeleteIcon
                    onClick={ deletePost }
                    className="delete" />
            </ListItem>
            <Divider />
        </div>
    );
}
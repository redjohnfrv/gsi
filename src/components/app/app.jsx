import React, {useState} from 'react';
import Container from '@material-ui/core/Container';
import './app.css';
import {Header} from './../header/header';
import {Filter} from './../filter/filter';
import {Posts} from './../posts/posts';
import {AddPost} from './../add/add';
import state from './../../state/state';

export function App() {

    let data = state;
    let [cloneData, setCloneData] = useState(data);

    const deletePost = id => {
        const newData = [...cloneData]
        const index = cloneData.findIndex(elem => elem.id === id);
        newData.splice(index, 1)
        setCloneData(newData)
    };

    return (
        <Container maxWidth="md">
            <Header />
            <Filter />
            <Posts
                posts={cloneData}
                deletePost={ deletePost } />
            <AddPost />
        </Container>
    );
};


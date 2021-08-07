import React from 'react';
import Container from '@material-ui/core/Container';
import './app.css';
import {Header} from './../header/header';
import {Filter} from './../filter/filter';
import {Posts} from './../posts/posts';
import {AddPost} from './../add/add';

export function App() {

    const data = [
        {id: Math.random(), label: "Create the App", important: false},
        {id: Math.random(), label: "Create the App post 2", important: false},
        {id: Math.random(), label: "Create the App post 3", important: true},
    ]

    return (
        <Container maxWidth="md">
            <Header />
            <Filter />
            <Posts posts={data} />
            <AddPost />
        </Container>
    );
}


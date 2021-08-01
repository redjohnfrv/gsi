import React from 'react';
import Container from '@material-ui/core/Container';
import './app.css';
import {Header} from './../header/header';
import {Filter} from './../filter/filter';
import {Posts} from './../posts/posts';
import {AddPost} from './../add/add';

export function App() {
    return (
        <Container maxWidth="md">
            <Header />
            <Filter />
            <Posts />
            <AddPost />
        </Container>
    );
}


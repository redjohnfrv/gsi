import React from 'react';
import Container from '@material-ui/core/Container';
import './app.css';
import {Header} from './../header/header';
import {Filter} from './../filter/filter';
import {Posts} from './../posts/posts';

export function App() {
    return (
        <Container maxWidth="md">
            <Header />
            <Filter />
            <Posts />
        </Container>
    );
}


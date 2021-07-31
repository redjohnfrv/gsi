import React from 'react';
import Container from '@material-ui/core/Container';
import './app.css';
import {Header} from './../header/header';

export function App() {
    return (
        <Container maxWidth="md">
            <Header />
        </Container>
    );
}


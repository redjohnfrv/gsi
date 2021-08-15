import React, {useEffect, useState} from 'react';
import Container from '@material-ui/core/Container';
import './app.css';
import {Header} from './../header/header';
import {Filter} from './../filter/filter';
import {Posts} from './../posts/posts';
import {AddPost} from './../add/add';
import state from './../../state/state';

export function App() {

    const data = state;
    const [cloneData, setCloneData] = useState(data);
    const [value, setValue] = useState('');
    const [urgents, setUrgents] = useState(0);
    const [tasks, setTasks] = useState(0);
    const [title, setTitle] = useState('No priority task assigned...')

    //COUNT TASKS
    useEffect(() => {
        setTasks(cloneData.length)
    }, [cloneData]);

    //DELETE CURRENT POST
    const deletePost = id => {
        const newData = [...cloneData];
        const index = newData.findIndex(elem => elem.id === id);
        newData.splice(index, 1)
        setCloneData(newData)
    };

    //PUSH NEW POST
    const addPost = value => {
        const newData = [...cloneData, {id: Math.random(), label: value, important: false}];
        setCloneData(newData)
        setValue('')
    };

    //LOOKING FOR INPUT VALUE
    const inputChange = (e) => {
        setValue(e.target.value)
    };

    //MARK POST AS URGENT
    const urgentPost = (id) => {
        const newData = [...cloneData];
        let counter = 0;
        newData.forEach(item => {
            if (item.id === id) item.important = !item.important
            item.important ? setUrgents(counter += 1) : setUrgents(counter)
        })
        setCloneData(newData)
    };

    //SET TASK AS A TITLE
    const setNewTitle = (id) => {
        const index = cloneData.findIndex(elem => elem.id === id);
        setTitle(cloneData[index].label)
    }

    //FILTER
    const filterUrgent = () => {
        const newData = cloneData.filter(item => item.important)
        setCloneData(newData)
    }
    const filterAll = () => {
        setCloneData(data)
    }

    return (
        <Container maxWidth="md">
            <Header
                urgents={ urgents }
                tasks={ tasks }
                title={ title }/>
            <Filter
                filterUrgent={ filterUrgent }
                filterAll={ filterAll }/>
            <Posts
                posts={ cloneData }
                deletePost={ deletePost }
                urgentPost={ urgentPost }
                setNewTitle={ setNewTitle } />
            <AddPost
                addPost={ addPost }
                inputChange={ inputChange }
                value={ value } />
        </Container>
    );
};


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
    const [bufferData, setBufferData] = useState(data);
    const [cloneData, setCloneData] = useState(data);

    const [searchValue, setSearchValue] = useState('');
    const [value, setValue] = useState('');
    const [urgents, setUrgents] = useState(0);
    const [tasks, setTasks] = useState(0);
    const [title, setTitle] = useState('No priority task assigned...');
    let counter = 0;

    //COUNT URGENTS
    const countUrgents = (arr, id) => {
        counter = 0;
        arr.forEach(item => {
            if (item.id === id) item.important = !item.important
            item.important ? setUrgents(counter += 1) : setUrgents(counter)
        });
    };

    //COUNT TASKS
    useEffect(() => {
        setTasks(cloneData.length)
    }, [cloneData]);

    //MARK POST AS URGENT
    const urgentPost = (id) => {
        const newData = [...cloneData];
        countUrgents(newData, id)
        setBufferData(cloneData)
        setCloneData(newData)
    };

    //DELETE CURRENT POST
    const deletePost = id => {
        const newData = [...cloneData];
        const index = newData.findIndex(elem => elem.id === id);
        newData.splice(index, 1)
        countUrgents(newData, id)
        setBufferData(newData)
        setCloneData(newData)
    };

    //PUSH NEW POST
    const addPost = value => {
        const newData = [...cloneData, {id: Math.random(), label: value, important: false}];
        setBufferData(newData)
        setCloneData(newData)
        setValue('')
    };

    //LOOKING FOR INPUT VALUE
    const inputChange = (e) => {
        setValue(e.target.value)
    };

    //SET TASK AS A TITLE
    const setNewTitle = (id) => {
        const index = cloneData.findIndex(elem => elem.id === id);
        setTitle(cloneData[index].label)
    }

    //FILTER
    const filterUrgent = () => {
        const newData = cloneData.filter(item => item.important);
        setBufferData(cloneData)
        setCloneData(newData)
    };
    const filterAll = () => {
        setCloneData(bufferData)
    };

    //SEARCHING
    const changeSearchValue = (e) => {
        setSearchValue(e.target.value)
    }
    const searchPosts = (e) => {
        e.preventDefault()
        if (searchValue.length <= 1) {
            setSearchValue('')
            return setCloneData(bufferData)
        };
        cloneData.forEach(item => console.log(item.label))
        const foundedPosts = cloneData.filter(item => item.label.indexOf(searchValue) != -1);
        setBufferData(cloneData)
        setCloneData(foundedPosts)
        setSearchValue('')
    };

    return (
        <Container maxWidth="md">
            <Header
                urgents={ urgents }
                tasks={ tasks }
                title={ title }
                searchValue={ searchValue }
                changeSearchValue={ changeSearchValue }
                searchPosts={ searchPosts } />
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


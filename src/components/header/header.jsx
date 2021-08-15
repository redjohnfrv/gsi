import React from 'react';
import './header.css';
import './../../styles/common.css';
import avatar from './../../images/ava-rosaria.png';
import priorityMark from './../../images/priorityMark.png';

import { Search } from "./search/search";

export function Header( { urgents, tasks, title, searchValue, changeSearchValue, searchPosts } ) {
    return (
        <header className="header">
            <div className="paimon-box">
                <div className="paimon"></div>
                <div className="hint">
                    If you want to find the task, use the searching panel below!
                </div>
            </div>


            <div className="title">
                <div className="title__avatar">
                    <img src={avatar} alt="my person is Rosaria" draggable="false" />
                </div>
                <div className="title__name">
                    <h1>Rosaria</h1>
                </div>
            </div>

            <div className="subinfo">
                <div className="priority">
                    <div className="priority__content">
                        <div className="mark priority__mark">
                            <img src={priorityMark} alt="main goal" draggable="false" />
                        </div>
                        <span className="priority__text urgent-text"> { title } </span>
                    </div>
                    <div className="priority__subinfo">
                        <span className="priority__text">Current tasks: <span> { tasks } </span></span>
                        <span className="priority__text">Urgent: <span> { urgents } </span></span>
                    </div>
                </div>
                <div>
                    <Search
                        searchValue={ searchValue }
                        changeSearchValue={ changeSearchValue }
                        searchPosts={ searchPosts } />
                </div>
            </div>

        </header>
    );
};
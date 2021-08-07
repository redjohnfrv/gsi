import React from 'react';
import './header.css';
import './../../styles/common.css';
import avatar from './../../images/ava-rosaria.png';
import priorityMark from './../../images/priorityMark.png';

import { Search } from "./search/search";

export function Header() {
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
                        <span className="priority__text urgent-text">The list of tasks for Rosaria!</span>
                        <div className="mark priority__mark">
                            <img src={priorityMark} alt="main goal" draggable="false" />
                        </div>
                    </div>
                    <div className="priority__subinfo">
                        <span className="priority__text">Current tasks: <span>0</span></span>
                        <span className="priority__text">Urgent: <span>0</span></span>
                    </div>
                </div>
                <div>
                    <Search />
                </div>
            </div>

        </header>
    );
};
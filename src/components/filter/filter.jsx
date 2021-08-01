import React from 'react';
import './filter.css';
import { Button, ButtonGroup } from '@material-ui/core';

export function Filter() {
    return (
        <div className="filter">
            <ButtonGroup variant="contained" color="#fff" aria-label="contained primary button group">
                <Button>All</Button>
                <Button>Urgent</Button>
            </ButtonGroup>
        </div>
    )
}
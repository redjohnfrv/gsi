import React from 'react';
import './filter.css';
import { Button, ButtonGroup } from '@material-ui/core';

export function Filter() {
    return (
        <div className="filter">
            <ButtonGroup variant="contained" aria-label="contained primary button group">
                <Button color="primary">All</Button>
                <Button color="secondary">Urgent</Button>
            </ButtonGroup>
        </div>
    )
}
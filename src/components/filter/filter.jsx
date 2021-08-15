import React from 'react';
import './filter.css';
import { Button, ButtonGroup } from '@material-ui/core';

export function Filter( { filterUrgent, filterAll } ) {

    return (
        <div className="filter">
            <ButtonGroup variant="contained" aria-label="contained primary button group">
                <Button onClick={ filterAll } color="primary">All</Button>
                <Button onClick={ filterUrgent } color="secondary">Urgent</Button>
            </ButtonGroup>
        </div>
    )
}
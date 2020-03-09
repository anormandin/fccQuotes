import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button, Segment, Card, Grid } from 'semantic-ui-react'


function QuoteHeader() {
    const options = {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    }
    const date = new Intl.DateTimeFormat('default', options).format(new Date());
    return (
        <Card.Content>
            <Card.Header>
                Quote of the day
            </Card.Header>
            <Card.Meta>
                <span style={{ textTransform: 'capitalize' }}>{date}</span>
            </Card.Meta>
        </Card.Content>
    )
};

export default QuoteHeader;
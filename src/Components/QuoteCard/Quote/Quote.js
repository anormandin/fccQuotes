import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button, Segment, Card, Grid } from 'semantic-ui-react'


const quoteStyle = {
    fontSize: '20px'
};

function Quote() {
    return (
        <Card.Content>
            <Segment basic>
                <q style={quoteStyle}>Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.</q>
            </Segment>
            <Segment textAlign='right' basic>-Steve Jobs</Segment>
        </Card.Content>
    )
};

export default Quote;
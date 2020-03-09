import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Segment, Card } from 'semantic-ui-react'

const quoteStyle = {
    fontSize: '20px'
};

function Quote(props) {
    return (
        <Card.Content>
            <Segment basic>
                <q id='text' style={quoteStyle}>{props.quote}</q>
            </Segment>
            <Segment id='author' textAlign='right' basic>-{props.author}</Segment>
        </Card.Content>
    )
};

export default Quote;
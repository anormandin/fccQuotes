import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button, Segment, Card, Grid } from 'semantic-ui-react'


function QuoteHeader() {
    return (
        <Card.Content>
            <Card.Header>
                Quote of the day
                </Card.Header>
            <Card.Meta>
                12 janver 2019
                </Card.Meta>
        </Card.Content>

    )
};

export default QuoteHeader;
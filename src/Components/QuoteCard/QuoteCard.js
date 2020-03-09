import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button, Segment, Card, Grid } from 'semantic-ui-react'

import Quote from './Quote/Quote';
import QuoteButtons from './QuoteButtons/QuoteButtons';
import QuoteHeader from './QuoteHeader/QuoteHeader';


function QuoteCard() {
    return (
        <Card fluid>
            <QuoteHeader />
            <Quote />
            <QuoteButtons />
        </Card>
    )
};

export default QuoteCard;
import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Card } from 'semantic-ui-react'
import axios from 'axios';

import Quote from './Quote/Quote';
import QuoteButtons from './QuoteButtons/QuoteButtons';
import QuoteHeader from './QuoteHeader/QuoteHeader';

class QuoteCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { quote: '', author: '' }
    }

    componentDidMount() {
        this.FetchNewQuote();
    }

    FetchNewQuote() {
        axios.get('https://api.quotable.io/random')
            .then(res => {
                this.setState({ quote: res.data.content, author: res.data.author });
            });
    }

    RequireNewQuote() {
        this.FetchNewQuote();
    }

    render() {
        return (
            <Card id='quote-box' fluid>
                <QuoteHeader />
                <Quote quote={this.state.quote} author={this.state.author} />
                <QuoteButtons quote={this.state.quote} author={this.state.author} requireNewQuote={this.RequireNewQuote.bind(this)} />
            </Card>
        )
    }
}

export default QuoteCard;
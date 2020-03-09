import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button, Card, Grid } from 'semantic-ui-react'

function QuoteButtons(props) {

    function handleNewQuote() {
        props.requireNewQuote();
    }
    const twitterContent = encodeURIComponent(`${props.quote}, ${props.author}`);
    const twitterLink = `https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text=${twitterContent}`;
    return (
        <Card.Content>
            <Grid columns='2'>
                <Grid.Column textAlign='left'>

                    <Button id='tweet-quote' as='a' circular color='twitter' icon='twitter'
                        size='small' title='Tweet this quote!' target="_blank"
                        href={twitterLink} />
                </Grid.Column>
                <Grid.Column textAlign='right'>
                    <Button id='new-quote' primary size='small' onClick={handleNewQuote}>New quote</Button>
                </Grid.Column>
            </Grid>
        </Card.Content>

    )
};

export default QuoteButtons;
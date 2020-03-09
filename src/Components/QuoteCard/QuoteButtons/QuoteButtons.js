import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button, Card, Grid } from 'semantic-ui-react'

function QuoteButtons() {
    return (
        <Card.Content>
            <Grid columns='2'>
                <Grid.Column textAlign='left'>
                    <Button circular color='twitter' icon='twitter' size='small' />
                </Grid.Column>
                <Grid.Column textAlign='right'>
                    <Button primary size='small'>New quote</Button>
                </Grid.Column>
            </Grid>
        </Card.Content>

    )
};

export default QuoteButtons;
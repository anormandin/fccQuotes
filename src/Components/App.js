import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Grid } from 'semantic-ui-react';

import QuoteCard from './QuoteCard/QuoteCard';



function App() {
  return (
    <div className="App" style={{ backgroundColor: 'dodgerblue' }}>
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <QuoteCard />
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default App;

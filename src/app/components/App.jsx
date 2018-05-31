import React, { PropTypes } from 'react';
import Header from './common/Header';
import { Grid } from 'react-bootstrap';


function App({ children }) {
  return (
    <Grid>
      <Header />
      {children}
    </Grid>
   
  );
}

App.propTypes = { children: PropTypes.object };

export default App;

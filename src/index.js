import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import HomeContainer from 'containers/HomeContainer.jsx';
import CalendarContainer from 'containers/CalendarContainer.jsx';
import NoMatch from 'components/NoMatch/NoMatch.jsx';


render((
  <Router history={browserHistory}>
    <Route path="/" component={HomeContainer}>
      <IndexRoute component={CalendarContainer} />
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
), document.getElementById('root'))

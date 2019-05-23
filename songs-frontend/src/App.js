import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import {Song} from './songs/Song'
import Songs from './songs/Songs'




function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/songs">Home</Link>
        </nav>

        <Route path="/songs" exact component={Songs} />
        <Route path={`/songs/:id`} component={Song} />
      </div>
    </Router>
  );
}

export default AppRouter;
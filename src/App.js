import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/* Font Awesome */
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

/* Components */
import HomePage from './components/HomePage.js';
import PostsPage from './components/PostsPage.js';
import ScrollToTop from './components/ScrollToTop.js';
import Error from './components/Error.js';

library.add(fab, fas);

function App() {
  return (
    <main>
      <Router>
        <ScrollToTop>
          <Switch>
            <Route path="/adison_heathcott/" component={HomePage} exact />
            <Route path="/adison_heathcott/posts" component={PostsPage} />
            <Route component={Error} />
          </Switch>
        </ScrollToTop>
      </Router>
    </main>
  );
}

export default App;

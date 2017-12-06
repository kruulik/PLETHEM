import React from 'react';
import { Route } from 'react-router';
import {
  App,
  NotFound,
  UserPage,
  RepoPage
} from 'containers';

export default () => (
  <Route path="/" component={App}>
    <Route path="/404" component={NotFound} />
    <Route path="/:login" component={UserPage} />
    <Route path="/:login/:name" component={RepoPage} />
    <Route path="*" component={NotFound} />
  </Route>
);

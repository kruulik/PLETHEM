import React from 'react';
import { Route } from 'react-router';
import {
  App,
  NotFound
} from 'containers';

export default () => (
  <Route path="/" component={App}>
    <Route path="/404" component={NotFound} />
    <Route path="*" component={NotFound} />
  </Route>
);

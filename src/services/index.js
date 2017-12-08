// import { browserHistory } from 'react-router-dom';
import createHashHistory from 'history/createHashHistory';
import * as _api from './api';

export const api = _api;
export const history = createHashHistory();

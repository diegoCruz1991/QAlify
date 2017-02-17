import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';

import App from './components/app';
import reducers from './reducers';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import FontAwesome from 'font-awesome/css/font-awesome.min.css'
import Admincss from '../style/sb-admin.css';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
	  <Router history={browserHistory}>
		  <Route path='/' component={App} onEnter={(nextState, replace) => replace('/home')}>
		  </Route>
		  <Route path='/home' component={App} />
	  </Router>    
  </Provider>, document.getElementById('wrapper')
);
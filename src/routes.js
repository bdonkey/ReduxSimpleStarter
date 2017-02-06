/**
 * Created by scottschmidt on 2/5/17.
 */
import React from 'react';
import {Route, IndexRoute} from 'react-router'

import App from './components/app';

const Greeting = () => {
  return <div>Hi there</div>
}

export default (
  <Route path="/" component={App}>
    <Route path="greet" component={Greeting}/>
    <Route path="greet2" component={Greeting}/>
    <Route path="greet3" component={Greeting}/>
  </Route>

)

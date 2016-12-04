var React = require('react');
var ReactDOM = require('react-dom');
var { Route,
      Router,
      IndexRoute,
      hashHistory } = require('react-router');
var Main = require('Main');
var About = require('About');


require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

require('style!css!sass!styles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
        <Route path="about" component={About} />
    </Route>
  </Router>,
  document.getElementById('app')
);

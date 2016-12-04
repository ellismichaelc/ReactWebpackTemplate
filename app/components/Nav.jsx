var React = require('react'),
    { Link, IndexLink } = require('react-router');

var Nav = React.createClass({

      render: function() {
        return(
          <div className="top-bar">
            <div className="top-bar-left">
              <ul className="menu">
                <li className="menu-text">
                    LOGO Here
                </li>
                <li>
                  <IndexLink to="/" activeClassName="active-link">Home</IndexLink>
                </li>
                <li>
                  <Link to="/about" activeClassName="active-link">About</Link>
                </li>
              </ul>
            </div>
          </div>
        );
      }
    });

module.exports = Nav;

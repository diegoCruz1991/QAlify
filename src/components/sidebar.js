import React, { Component } from 'react';
import { Link } from 'react-router'
import { connect } from 'react-redux';

class Sidebar extends Component {
	constructor(props) {
    super(props);
  }

	render() {
		return (
	    <div className="collapse navbar-collapse navbar-ex1-collapse">
	      <ul className="nav navbar-nav side-nav">
			    <li>
			   		<Link to="/home" onlyActiveOnIndex={true} activeClassName="active"><i className="fa fa-fw fa-dashboard"></i>Dashboard</Link>
			    </li>
			    <li>
			      <Link to="/home" onlyActiveOnIndex={true} activeClassName="active"><i className="fa fa-fw fa-file-text-o"></i> Test Plans</Link>
			    </li>
			    <li>
			      <Link to="/home" onlyActiveOnIndex={true} activeClassName="active"><i className="fa fa-fw fa-tasks"></i> Jobs</Link>
			    </li>
			    <li>
			      <Link to="/home" onlyActiveOnIndex={true} activeClassName="active"><i className="fa fa-fw fa-suitcase"></i> Suites</Link>
			    </li>
			  </ul>
	    </div>
		);
	}
}

function mapStateToProps({configuration}) {
  return { configuration };
}

export default connect(mapStateToProps)(Sidebar);
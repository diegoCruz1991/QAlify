import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class PageContainer extends Component {
	constructor(props) {
    super(props);
  }

  render() {
    return (
	    <div id="page-wrapper">
        <div className="container-fluid">
          
          <div className="row">
            <div className="col-lg-12">
              <h1 className="page-header">Blank Page <small>Subheading</small>
              </h1>
              <ol className="breadcrumb">
                <li>
                  <i className="fa fa-dashboard"></i>  <Link to="/home">{this.props.configuration.proyect.name}</Link>
                </li>
                <li className="active">
                  <i className="fa fa-file"></i> Blank Page
                </li>
              </ol>
            </div>
          </div>

        </div>
	    </div>
    );
  }
}

function mapStateToProps({configuration}) {
  return { configuration };
}

export default connect(mapStateToProps)(PageContainer);
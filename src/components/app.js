import React, { Component } from 'react';
import NavBar from '../components/navbar';
import { connect } from 'react-redux';
import { fetchConfiguration } from '../actions/index';
import { bindActionCreators } from 'redux';
import PageContainer from './page_container'

class App extends Component {
	constructor(props) {
    super(props);

    this.props.fetchConfiguration();
  }

  render() {
  	if(Object.keys(this.props.configuration).length == 0) {
  		return null;
  	}

    return (
    	<div>
		    <NavBar configuration={this.props.configuration} />
		    <PageContainer />
	    </div>
    );
  }
}

function mapStateToProps({configuration}) {
  return { configuration };
}

function mapDispatchToProps(dispatch) {

  return bindActionCreators({ fetchConfiguration: fetchConfiguration }, dispatch);

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
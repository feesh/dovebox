import React from 'react';
import { bindActionCreators } from 'redux';
import * as actionCreators from './actions/index';
import { connect } from 'react-redux';

import App from './app';
import store from './store';
import { setupList } from './actions/index';


/*  Container for bringing in the data */
class Container extends React.Component {
  constructor() {
    super();

    this.state = {
      data: null,
    };
  }

  getInitialState() {
    return { data: null };
  }

  componentWillMount() {
    this.loadDoves();
  }

  componentDidMount() {
  }

  render() {

    const { doves } = this.props;

    console.log(store.getState());

    // if (!doves) return <div>Fancy loading gif here...</div>;

    return (
      <App doves={doves} />
    );
  }

  loadDoves() {
    const url = 'http://localhost:3000/doves';

    $.ajax({
      url: url,
      dataType: 'jsonp',
      type: 'GET',
      data: {},
      success: function(data) {
        // console.log(data);

        // Set store with new doves
        store.dispatch(setupList(data));
        console.log(store.getState());

        // Render App
        this.setState({
          data: data,
        });

      }.bind(this),
      error: function(data) {
        console.log(data);
      }
    })
  }
}


export default Container;

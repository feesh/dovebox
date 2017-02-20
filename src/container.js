import React from 'react';

import App from './app';

/*  Container for bringing in the data */
export default class Container extends React.Component {
  constructor() {
    super();

    this.state = {
      data: null,
      selected_pic: null,
    };
  }

  componentDidMount() {
    const url = 'http://localhost:3000/doves';

    $.ajax({
      url: url,
      dataType: 'jsonp',
      type: 'GET',
      data: {},
      success: function(data) {
        console.log(data);

        this.setState({
          data: data,
        });
      }.bind(this),
      error: function(data) {
        console.log(data);
      }
    })
  }

  render() {
    const { data } = this.state;

    if (!data) return <div>Fancy loading gif here...</div>;

    return (
      <main>
        <App doves={data} />
      </main>
    );
  }
}

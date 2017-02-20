import 'whatwg-fetch';
import React from 'react';

import DoveTable from './components/dovetable-component.js';

/*  Gallery viewer app */
class App extends React.Component {
  constructor() {
    super();

    this.state = {
    };
  }


  render() {
    const { doves } = this.props;

    return (
      <section className="gallery">
        <div className="content">
          <DoveTable doves={doves} />
        </div>
      </section>
    );
  }
}

export default App;

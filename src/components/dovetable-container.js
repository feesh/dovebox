import React from 'react';

import DoveTable from './dovetable-component';

/*  Container for bringing in the data */
class DoveTableContainer extends React.Component {
  constructor() {
    super();

    this.state = {
    };
  }

  render() {
    const { doves } = this.props;

    if (!doves) return <div>Fancy loading gif here...</div>;

    return (
      <DoveTable
        doves={doves}
        {...this.props}
      />
    );
  }
}

export default DoveTableContainer;

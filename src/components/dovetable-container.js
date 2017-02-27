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

    // If the filter is active, populate table with filtered list
    if (this.props.doves.filter) {
      return (
        <DoveTable
          doveList={this.props.doves.filteredDoves}
          {...this.props}
        />
      );
      // or if sort is active
    } else if (this.props.doves.sort) {
      return (
        <DoveTable
          doveList={this.props.doves.sortedDoves}
          {...this.props}
        />
      );
    } else { // Otherwise show full dove list
      return (
        <DoveTable
          doveList={this.props.doves.doves}
          {...this.props}
        />
      );
    }
  }
}

export default DoveTableContainer;

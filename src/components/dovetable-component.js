import React from 'react';

class DoveTable extends React.Component {
  renderDoveTable() {
    const doves = this.props.doveList;
    const dovelist = doves.map((dove, i) => this.renderDove(i, dove));

    // If there are no doves, render nothing
    if (!dovelist.length) return null;

    return (
      <tbody>
        {dovelist}
      </tbody>
    );
  }

  renderDove(key, dove) {
    return (
      <tr key={key} id={key}>
        <td style={{ backgroundColor: dove.color }}>{dove.id}</td>
        <td>{dove.images_collected}</td>
        <td>{dove.last_command}</td>
        <td>{dove.deorbit_dt}</td>
        <td><button onClick={() => this.props.deleteDove(dove.id)}>Delete</button></td>
      </tr>
    );
  }

  render() {
    return (
      <section>
        <table className="dovetable">
          <thead>
            <tr>
              <td>Dove</td>
              <td>Last command</td>
              <td>Images collected</td>
              <td>Deorbit</td>
              <td>Action</td>
            </tr>
          </thead>
          {this.renderDoveTable()}
        </table>
      </section>
    );
  }
}

export default DoveTable;

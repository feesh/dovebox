import React from 'react';
import classNames from 'classnames';

class DoveTable extends React.Component {

  // Toggle sort clicks
  handleSortClick(event, sortby) {
    event.preventDefault();
    this.props.sortList(sortby);
  }

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
        <td className="-deorbit"><span className="nowrap">{dove.deorbit_dt}</span></td>
        <td><button className="btn" onClick={() => this.props.deleteDove(dove.id)}>Delete</button></td>
      </tr>
    );
  }

  render() {
    const sortByIdClass = classNames({ sortby: this.props.doves.sort === 'id' });
    const sortByRainbowClass = classNames({ sortby: this.props.doves.sort === 'rainbow' });
    const sortByImgsClass = classNames({ sortby: this.props.doves.sort === 'imgs' });
    const sortByCmndClass = classNames({ sortby: this.props.doves.sort === 'cmnd' });
    const sortByDateClass = classNames({ sortby: this.props.doves.sort === 'date' });

    return (
      <section>
        <table className="dovetable">
          <thead>
            <tr>
              <td>
                <a
                  href=""
                  className={sortByIdClass}
                  onClick={(event, id) => this.handleSortClick(event, 'id')}>
                Dove
                </a>&nbsp;
                <a
                  href=""
                  className={sortByRainbowClass}
                  onClick={(event, id) => this.handleSortClick(event, 'rainbow')}>
                  🌈
                </a>
              </td>
              <td>
                <a
                  href=""
                  className={sortByImgsClass}
                  onClick={(event, id) => this.handleSortClick(event, 'imgs')}>
                  Imgs collected
                </a>
              </td>
              <td>
                <a
                  href=""
                  className={sortByCmndClass}
                  onClick={(event, id) => this.handleSortClick(event, 'cmnd')}>
                  Last command
                </a>
              </td>
              <td>
                <a
                  href=""
                  className={sortByDateClass}
                  onClick={(event, id) => this.handleSortClick(event, 'date')}>
                  Deorbit
                </a>
              </td>
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

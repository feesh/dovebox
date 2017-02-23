import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions/index';
import Main from './Main';

function mapStateToProps(state) {
  return {
    doves: state.doves,
    filteredDoves: state.filteredDoves
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const DoveApp = connect(mapStateToProps, mapDispachToProps)(Main);

export default DoveApp;

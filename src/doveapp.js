import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions/index';
import Main from './Main';

function mapStateToProps(state) {
  return {
    doves: state.doves
  }
}

function mapDispachToProps(dispatch) {
  console.log('axncrtrs');
  console.log(actionCreators);

  return bindActionCreators(actionCreators, dispatch);
}

const DoveApp = connect(mapStateToProps, mapDispachToProps)(Main);

export default DoveApp;

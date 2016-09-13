import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { changeMessage } from '../actions/example';
import ButtonExample from '../components/ButtonExample';

const mapStateToProps = (state) => ({
  message: state.example.message,
  message2: state.example.message2
});

const mapDispatchToProps = (dispatch) => ({
  changeMessage(text) {
    dispatch(changeMessage(text));
  }
});

@connect(mapStateToProps, mapDispatchToProps)
export default class App extends Component {
  render() {
    const { message, message2 } = this.props;

    return (
      <div>
        Your first message is <b>{ message }</b>
        <br />
        { message2 }
        <br />
        <ButtonExample
          changeMessage={this.props.changeMessage}
        />
      </div>
    );
  }
}

App.propTypes = {
  message: PropTypes.string,
  message2: PropTypes.string,
  changeMessage: PropTypes.func
};

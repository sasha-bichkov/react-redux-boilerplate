import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  message: state.example.message
});


@connect(mapStateToProps)
export default class App extends Component {
  render() {
    const { message } = this.props;

    return (
      <div>
        Your first message is <b>{ message }</b>
      </div>
    );
  }
}

App.propTypes = {
  message: PropTypes.string,
};

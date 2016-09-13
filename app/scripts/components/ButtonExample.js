import React, { Component, PropTypes } from 'react';


export default class ButtonExample extends Component {

  constructor() {
    super();
    this.onClickButton = this.onClickButton.bind(this);
  }

  onClickButton() {
    const text = 'New Text!!';
    this.props.changeMessage(text);
  }

  render() {
    return (
      <div>
        <button onClick={this.onClickButton}>
          Change text
        </button>
      </div>
    );
  }
}

ButtonExample.propTypes = {
  changeMessage: PropTypes.func
};

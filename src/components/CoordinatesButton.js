import React from 'react';

export default class CoordinatesButton extends React.Component {

  handleClick = (event) => {
    this.props.onReceiveCoordinates;
  }

  render() {
    return (
      <button onClick={this.handleClick}>Click me!</button>
    );
  }
}

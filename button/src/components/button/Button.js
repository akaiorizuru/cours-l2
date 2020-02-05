import React from "react";
import './Button.css';

class Button extends React.Component {

  constructor(props) {
    super(props);
    // ...
    this.state = {toggle: false};
    
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // ...
    this.setState(state => ({
      toggle: !state.toggle
    }));

  }

  render() {
    return (
     
      <button
          data-testid="button"
        className={
          this.state.toggle ? "toggled":"untoggled"
        }
        onClick={
          this.handleClick
        }
      >
      {this.props.children ? this.props.children : "Add text!"}
      </button>);
  }

}



export default Button;

import React from 'react';

class Timer extends React.Component {

//Voir https://medium.com/@650egor/react-30-day-challenge-day-1-simple-timer-df85d0867553

  constructor(props) {
    super(props);
    this.state ={
      time:0
    }
    this.count=null; 
  }
  

  componentDidMount() {
    this.count=setInterval (() => this.setState ({ 
      time: this.state.time + 1 
    } ), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.count);
    
  }
  
  render () {
    return (
      <div data-testid="timer">
        {this.state.time} 
      </div>
    );
  }
}

export default Timer;


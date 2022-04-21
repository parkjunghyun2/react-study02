import React from 'react';
import './App.css';

class App4 extends React.Component {
  state = {
    channel: 1,
    volume: 0,
  };

  chAdd = () => {
    if (this.state.channel >= 15) {
      this.setState(() => ({ channel: 1 }));
    } else {
      this.setState((current) => ({ channel: current.channel + 1 }));
    }
  };

  chMinus = () => {
    if (this.state.channel <= 1) {
      this.setState(() => ({ channel: 15 }));
    } else {
      this.setState((current) => ({ channel: current.channel - 1 }));
    }
  };

  volAdd = () => {
    if (this.state.volume < 15) {
      this.setState((current) => ({ volume: current.volume + 1 }));
    }
  };

  volMinus = () => {
    if (this.state.volume > 0) {
      this.setState((current) => ({ volume: current.volume - 1 }));
    }
  };

  render() {
    return (
      <div>
        <h1>ch {this.state.channel}</h1>
        <button onClick={this.chAdd}> + </button>
        <button onClick={this.chMinus}> - </button>
        <h2>vol : {this.state.volume}</h2>
        <button onClick={this.volAdd}> + </button>
        <button onClick={this.volMinus}> - </button>
      </div>
    );
  }
}

export default App4;

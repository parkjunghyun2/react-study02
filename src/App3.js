import React from 'react';
import './App.css';

class App3 extends React.Component {
  state = {
    count: 0,
  };

  add = () => {
    // this.setState({ count: this.state.count + 1 });
    this.setState((current) => ({
      count: current.count + 1,
    }));
  };

  minus = () => {
    this.setState((current) => ({
      count: current.count - 1,
    }));
  };

  render() {
    return (
      <div>
        <h1>클래스형 컴포넌트 사용하기</h1>
        <h2>state가 가지고 있는 count의 값: {this.state.count}</h2>
        <button onClick={this.add}> + </button>
        <button onClick={this.minus}> - </button>
      </div>
    );
  }
}

export default App3;

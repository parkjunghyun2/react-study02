import React from 'react';
import './App.css';

class App6 extends React.Component {
  state = {
    isLoading: true,
    movies: [],
    count: 5,
  };

  render() {
    const { isLoading } = this.state;

    return <div>{isLoading ? 'Loading...' + this.state.count : 'We are ready'}</div>;
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ count: this.state.count - 1 });
    }, 1000);
    // setTimeout(() => {
    //     this.setState(()=>({ isLoading: false }));
    // }, 5000);
    // for (var i = 1; i < 5; i++) {
    //   setTimeout(() => {
    //     this.setState(() => ({
    //       count: this.state.count - 1,
    //     }));
    //   }, i * 1000);
    // }
    //------------------------------------------------------------------------
    // if (this.state.count > 1) {
    //   setInterval(() => {
    //     this.setState(() => ({
    //       count: this.state.count - 1,
    //     }));
    //   }, 1000);
    // } else {
    //      this.setState(()=>({isLoading: false}));
    // }
  }

  componentDidUpdate() {
    setTimeout(() => {
      if (this.state.count > 1) {
        this.setState({ count: this.state.count - 1 });
      } else {
        this.setState({ isLoading: false });
      }
    }, 1000);
  }
}

export default App6;

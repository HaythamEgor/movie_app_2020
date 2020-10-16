import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor!!!')
  }
  state = {
    count: 0,
  };

  add = () => {
    this.setState(current => ({
      count: this.state.count +1,
    }));
  };

  minus = () => {
    this.setState(current => ({
      count: this.state.count -1,
    }));
  };
  componentDidMount() {
    console.log('componentDidMount!!!')
  }
  componentDidUpdat() {
    console.log('componentDidUpdat!!!')
  }
  componentWillUnmount() {
    console.log('componentWillUnmount!!!')
  }
  render() {
    console.log('render!!!')
    return (
      <div>
      <h1>I'm class component: {this.state.count}</h1>
      <button onClick={this.add}>Add</button>&nbsp;&emsp;
      <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;

import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("hello");
  }
  state = {
    count: 0
  };
  add = () => {
    /*this.state.count=1;은 안됨. 직접적으로 state를 변경하는건 안됨. 매번 "새로 설정"한다는 느낌으로 아래와같이 ㄱ */
    this.setState(current => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState(current => ({ count: current.count - 1 }));
  };
  componentDidMount() {
    console.log("component rendered");
  }
  /* componentDidMount는 render가 실행되고 나서 실행됨. */
  componentDidUpdate() {
    console.log("I just updated~!");
  }
  componentWillUnmount() {
    console.log("Goodbye, cruel world")
  }
  render() {
    console.log("I am rendering");
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  };
}
/*위의 extends == extends from 즉  React > App*/
/*함수가 아니라 class라 return대신 render를 이용.*/

export default App;

import React from 'react';
import PropTypes from "prop-types"


class App extends React.Component {
  state = {
    count: 0
  };
  add = () => {
    console.log("add");
  };
  minus = () => {
    console.log("minus");
  };
  render() {
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

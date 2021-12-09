import React from "react";
import './SortingVisualizer.css';

export class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: []
    }
  }

  componentDidMount() {
    this.createArray();
  }

  createArray() {
    const newArr = [];
    for (let i = 0; i < 150; i++) {
      newArr.push(rndN(5, 1000));
    }
    this.setState({ arr: newArr })
  }
  render() {
    return (
      <div id="bars-container">
        {this.state.arr.map((val, indx) => <div key={indx} className="bars" style={{ height: `${val}px` }}></div>)
        }
      </div>
    )
  }
}

function rndN(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


export default SortingVisualizer;
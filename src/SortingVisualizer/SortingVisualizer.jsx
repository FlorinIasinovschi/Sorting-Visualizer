import React from "react";
import './SortingVisualizer.css';
import { sortAlgo } from "../Algorithms/testAlgo";

export class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [],
      debugState: "Nothing"
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

  sortingAlgo() {
    const jsAlgo = this.state.arr.slice().sort((a, b) => a - b);
    const testAlgo = sortAlgo(this.state.arr.slice());
    console.log(testAlgo);
    console.log(correctSort(jsAlgo, testAlgo));
    // this.setState({
    //   arr: sortAlgo(this.state.arr)
    //debugState: sortAlgo(this.state.arr)
    //})
  }

  render() {
    return (
      <div className="main-container">
        <div id="bars-container">
          {this.state.arr.map((val, indx) => <div key={indx} className="bars" style={{ height: `${val}px` }}></div>)
          }
        </div>
        <div>{this.state.debugState}</div>
        <button onClick={() => this.createArray()}>Generate New Array</button>

        <button onClick={() => this.sortingAlgo()}>Sorting Algorithm</button>
      </div>

    )
  }
}

function correctSort(js, test) {

  for (let i = 0; i < 150; i++) {
    if (js[i] != test[i]) {
      console.log(js[i]);
      console.log(test[i]);
      return false;
    }
  }
  return true;
}

function rndN(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


export default SortingVisualizer;
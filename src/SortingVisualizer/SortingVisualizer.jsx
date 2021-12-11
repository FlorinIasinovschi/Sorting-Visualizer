import React from "react";
import './SortingVisualizer.css';
import { sortAlgo } from "../Algorithms/testAlgo";
import { bubbleSort } from "../Algorithms/bubble-sort";

export class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [],
      defaultColor: 'aqua',
      debugState: "Nothing"
    }
  }

  componentDidMount() {
    //Creates the first array when loading
    const newArr = [];
    for (let i = 0; i < 150; i++) {
      newArr.push(rndN(5, 900));
    }
    this.setState({ arr: newArr })
  }

  createArray() {
    const newArr = [];
    for (let i = 0; i < 150; i++) {
      newArr.push(rndN(5, 900));
      // Set the default color when generating new array
      const newArrBar = document.getElementsByClassName('arr-bar');
      newArrBar[i].style.backgroundColor = 'aqua';
    }
    this.setState({ arr: newArr });

  }

  sortingBubble() {
    const animation = bubbleSort(this.state.arr);

    for (let i = 0; i < 150; i++) {
      console.log(animation[i]);
      const arrBar = document.getElementsByClassName('arr-bar');
      const indx = animation[i];
      const barStyle = arrBar[i].style;
      setTimeout(() => {
        barStyle.backgroundColor = 'blue';
        barStyle.height = `${animation[i]}px`
      }, i * 30)
    }
    // this.setState({
    //   arr: bubbleSort(this.state.arr)
    // })
  }

  sortingAlgo() {
    let dai = sortAlgo(this.state.arr);
    console.log(dai);
    //console.log(testAlgo);
    //console.log(correctSort(jsAlgo, testAlgo));
    this.setState({
      arr: sortAlgo(this.state.arr)
      //debugState: sortAlgo(this.state.arr)
    })
  }

  render() {
    return (
      <div className="main-container">
        <div id="bars-container">
          {this.state.arr.map((val, indx) => <div key={indx} className="arr-bar" style={{
            backgroundColor: this.state.defaultColor,
            height: `${val}px`
          }}></div>)
          }
        </div>
        <div>{this.state.debugState}</div>
        <button onClick={() => this.createArray()}>Generate New Array</button>

        <button onClick={() => this.sortingAlgo()}>Sorting Algorithm</button>
        <button onClick={() => this.sortingBubble()}>Bubble Sort</button>
      </div >

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
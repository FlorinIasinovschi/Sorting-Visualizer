import React, { useEffect, useRef, useState } from "react";
import { sortAlgo } from "../Algorithms/testAlgo";
import styled from "styled-components";


const BarsContainer = styled.div`
  //background-color: rgb(41, 41, 41);
  display:flex; 
  justify-content: space-evenly;
  align-items: flex-end;
  flex-direction: row;
  height: calc(95vh - 80px);
  width: 80vw;
  position: relative;
`
const ArrBar = styled.div`
  margin:0;
  display: inline-block;
  /* width: 18px; */
`



export default function SortingVisualizer({ actionType, btnToggle, sliderSizeValue, sliderSpeedValue }) {

  const [visualArr, setVisualArr] = useState([])
  const [defaultColor, setDefaultColor] = useState('aqua')

  useEffect(() => {
    initialArray();

  }, [sliderSizeValue]);


  useEffect(() => {
    if (actionType === "new") {
      createArray()

    }
    if (actionType === "bubble") {
      sortingBubble()
    }
    if (actionType === "selection") {
      selectionSort()
    }

  }, [btnToggle]);



  const initialArray = () => {

    const newArr = [];
    for (let i = 0; i < sliderSizeValue; i++) {
      newArr.push(rndN(10, 850));
    }
    setVisualArr(newArr);
  }



  const createArray = () => {
    const zeroArr = [];
    for (let i = 0; i < sliderSizeValue; i++) {
      zeroArr.push(0);
    }
    setVisualArr(zeroArr)

    const steps = [];
    for (let i = 0; i < sliderSizeValue; i++) {
      zeroArr[i] = rndN(10, 850);
      steps.push(zeroArr.slice());
    }
    console.log(steps);

    const arrBar = document.getElementsByClassName('arr-bar');
    for (let i = 0; i < steps.length; i++) {
      setTimeout(() => {
        arrBar[i].style.backgroundColor = "lightgrey";
        setVisualArr(steps[i])
      }, (100 - sliderSpeedValue) * i)
    }

  }


  const sortingBubble = () => {

    const arr = visualArr.slice();
    //console.log(arr);
    let arrSteps = [];
    let arrRedlineSteps = [];
    let defaultColorSteps = [];
    let cycleSteps = [];
    const arrBar = document.getElementsByClassName('arr-bar');
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j + 1] < arr[j]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
        arrSteps.push(arr.slice());
        arrRedlineSteps.push(j + 1);
        defaultColorSteps.push(j);
      }
      cycleSteps.push(arrSteps.length - 1);
    }

    let count = 0;
    for (let i = 0; i < arrSteps.length; i++) {
      // eslint-disable-next-line no-loop-func
      setTimeout(() => {
        setVisualArr(arrSteps[i])

        arrBar[arrRedlineSteps[i]].style.backgroundColor = "red";
        arrBar[defaultColorSteps[i]].style.backgroundColor = "lightgrey";
        if (i === cycleSteps[count]) {
          arrBar[arr.length - 1 - count].style.backgroundColor = "lightgreen";
          count++
        }
        // MAKE LAST BAR GREEN
        if (i === arrSteps.length - 1) {
          arrBar[0].style.backgroundColor = "lightgreen";

        }
      }, (100 - sliderSpeedValue) * i);
    }
  }

  const selectionSort = () => {

    const arr = visualArr.slice();
    let arrSteps = [];
    let arrRedlineSteps = [];
    let defaultColorSteps = [];
    let currentMinValue = [];
    let currentMinSteps = [];
    let cycleSteps = [];
    const arrBar = document.getElementsByClassName('arr-bar');
    for (let i = 0; i < arr.length; i++) {
      let min = i
      for (let j = 0; j < arr.length - 1 - i; j++) {
        // j keeps growing on each cycle
        if (arr[j + 1 + i] < arr[min]) {
          min = j + 1 + i
          //push the min value only when you find it
          currentMinValue.push(min);
          // push at which point of the steps you encounter a min value
          currentMinSteps.push(arrSteps.length - 1)
        }
        arrSteps.push(arr.slice());
        arrRedlineSteps.push(j + i + 1);
        defaultColorSteps.push(j + i);
      }
      //AFTER ONE CYCLE
      if (i !== min) {
        let temp = arr[i]
        arr[i] = arr[min]
        arr[min] = temp
      }
      cycleSteps.push(arrSteps.length - 1);


    }
    console.log(arrSteps)
    console.log(arr)

    let cycleCount = 0;
    let minStepsCount = 0;
    for (let i = 0; i < arrSteps.length; i++) {
      // eslint-disable-next-line no-loop-func
      setTimeout(() => {
        setVisualArr(arrSteps[i])

        arrBar[arrRedlineSteps[i]].style.backgroundColor = "red";
        arrBar[defaultColorSteps[i]].style.backgroundColor = "lightgrey";
        //at the end of each j loop cycle
        if (i === cycleSteps[cycleCount]) {
          arrBar[cycleCount].style.backgroundColor = "lightgreen";
          cycleCount++
        }
        //at the start of each step where you encounter a min value
        if (i === currentMinSteps[minStepsCount]) {
          console.log("min")
          //red and grey overwrites it for the moment
          arrBar[currentMinValue[minStepsCount]].style.backgroundColor = "blue";
          minStepsCount++
        }

        // MAKE LAST BAR GREEN
        if (i === arrSteps.length - 1) {
          arrBar[arrBar.length - 1].style.backgroundColor = "lightgreen";

        }
      }, (100 - sliderSpeedValue) * i);
    }
  }


  const sortingAlgo = () => {
    setVisualArr(sortAlgo(this.state.arr))
  }


  const correctSort = (js, test) => {

    for (let i = 0; i < 150; i++) {
      if (js[i] !== test[i]) {
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

  return (
    <BarsContainer>
      {visualArr?.map((val, indx) => (<ArrBar key={indx} className="arr-bar" style={{
        backgroundColor: defaultColor,
        height: `${val}px`,
        width: `calc(70vw / ${sliderSizeValue})`
      }}></ArrBar>))
      }
    </BarsContainer>

  );
}











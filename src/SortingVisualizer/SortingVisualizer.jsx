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
  const [defaultColor, setDefaultColor] = useState('lightgrey')

  useEffect(() => {
    initialArray();

  }, [sliderSizeValue]);

  useEffect(() => {
    console.log("changes")

  }, [visualArr]);

  useEffect(() => {
    if (actionType === "new") {
      createArray()

    }
    if (actionType === "bubble") {
      sortingBubble()
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
        //greenColorSteps.push(j);

      }
      //at step n PUSH k to be green
      cycleSteps.push(arrSteps.length - 1);
      //console.log(cycleSteps)

    }

    console.log(cycleSteps.length);
    console.log(cycleSteps);

    let count = 0;
    for (let i = 0; i < arrSteps.length; i++) {
      // eslint-disable-next-line no-loop-func
      setTimeout(() => {
        setVisualArr(arrSteps[i])

        arrBar[arrRedlineSteps[i]].style.backgroundColor = "red";
        //arrBar[greenColorSteps[i]].style.backgroundColor = "lightgreen";
        arrBar[defaultColorSteps[i]].style.backgroundColor = "lightgrey";
        if (i === cycleSteps[count]) {
          console.log("includes" + i)
          arrBar[arr.length - 1 - count].style.backgroundColor = "lightgreen";
          count++
        }
        if (i === arrSteps.length - 1) {
          arrBar[0].style.backgroundColor = "lightgreen";

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











import SortingVisualizer from './SortingVisualizer/SortingVisualizer';
import Navbar from './components/Navbar';
import styled from 'styled-components';
import { useRef, useState } from 'react';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(41, 41, 41);

`

function App() {

  const [actionType, setActionType] = useState("")
  const [btnClick, setbtnClick] = useState(false)
  const [sliderSizeValue, setSliderSizeValue] = useState(50)
  const [sliderSpeedValue, setSliderSpeedValue] = useState(50)


  const handleBtn = (e) => {
    setbtnClick((prev) => !prev)
    setActionType(e);

  }

  const handleSizeChange = (e) => {
    setSliderSizeValue(e.target.value)
  }
  const handleSpeedChange = (e) => {
    setSliderSpeedValue(e.target.value)
  }

  return (
    <Container>
      <Navbar onBtnPress={(e) => handleBtn(e)} onSizeChange={(e) => handleSizeChange(e)} onSpeedChange={(e) => handleSpeedChange(e)} />
      <SortingVisualizer actionType={actionType} btnToggle={btnClick} sliderSizeValue={sliderSizeValue} sliderSpeedValue={sliderSpeedValue} />
    </Container>
  );
}

export default App;


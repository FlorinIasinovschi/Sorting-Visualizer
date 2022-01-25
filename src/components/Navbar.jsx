import React from 'react';
import styled from 'styled-components';
import { Slider } from '@mui/material/';


const Wrapper = styled.div`
  height: 80px;
  width: 100%;
  background-color: #3f83be;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Container = styled.div`
  height: 100%;
  width: 80%;
  background-color: #4e78d1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const SliderContainer = styled.div`
  height: 80%;
  width: 300px;
  background-color: #272727;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Title = styled.span`
    color: #ffffff;
    font-size: 1.5em;
    margin-right: 10px;

`

const Btn = styled.button`
  font-weight: 500;
  font-size: 1em;
  letter-spacing: 0.1em;
  text-decoration: none;
  color: #ffffff;
  display: inline-block;
  padding: 10px 40px 10px 40px;
  position: relative;
  border: 3px solid #ffffff;
  border-radius: 25px;
  cursor: pointer;
  background-color: transparent;
`



export default function Navbar(props) {


  return (
    <Wrapper>
      <Container>
        <SliderContainer>
          <Title>
            Size
          </Title>
          <Slider onChange={(e) => props.onSizeChange(e)} defaultValue={50} min={15} aria-label="Default" valueLabelDisplay="auto" />
        </SliderContainer>
        <SliderContainer>
          <Title>
            Speed
          </Title>
          <Slider onChange={(e) => props.onSpeedChange(e)} defaultValue={50} min={15} max={99} aria-label="Default" valueLabelDisplay="auto" />
        </SliderContainer>
        <Btn onClick={() => window.location.reload()}>Stop And Reset</Btn>
        <Btn onClick={() => props.onBtnPress("new")}>Generate New Array</Btn>
        <Btn onClick={() => props.onBtnPress("bubble")}>Bubble Sort</Btn>
      </Container>
    </Wrapper>

  )
}

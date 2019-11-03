import styled, {keyframes} from 'styled-components'
import React from 'react'

const sliding = keyframes`
  from {
    left: -100%;
  }
  
  to {
    left: 0;
  }
`

export const SliderHeightKepper = styled.div`
  height: 200px;
`

export const SliderWrapper = styled.div`
  height: 200px;
  width: 100vw;
  
  position: absolute;
  left: 0;
  
  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    
    width: 20%;
    height: 100%;
    background-image: linear-gradient(to right, white , transparent);
  }
  
  ::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
   
    width: 20%;
    height: 100%;
    background-image: linear-gradient(to right, transparent , white);
  }
`

export const SliderContainer = styled.div`
  height: 100%;
  position: absolute;
  display: inline-block;
  white-space: nowrap;
  
  animation: ${sliding} 16s linear infinite;
`

const SlideImage = styled.img`
  width: 270px;
  height: 200px;
  margin-left: 16px;
  border-radius: 8px;
`

export const Slide = ({slideImg}) => <SlideImage alt="slide" src={slideImg}/>
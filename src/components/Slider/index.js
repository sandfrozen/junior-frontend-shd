import React from 'react'

import {SliderHeightKepper, SliderWrapper, SliderContainer, Slide} from './styles'
import slide1 from './assets/slide-1.jpg'
import slide2 from './assets/slide-2.jpg'
import slide3 from './assets/slide-3.jpg'
import slide4 from './assets/slide-4.jpg'
import slide5 from './assets/slide-5.jpg'
import slide6 from './assets/slide-6.jpg'


const slides = [
  slide1, slide2, slide3, slide4, slide5, slide6, slide1, slide2, slide3, slide4, slide5, slide6, slide1
]

export const Slider = () => (
  <SliderHeightKepper>
    <SliderWrapper>
      <SliderContainer>
        {slides.map(s => <Slide slideImg={s}/>)}
      </SliderContainer>
    </SliderWrapper>
  </SliderHeightKepper>
)
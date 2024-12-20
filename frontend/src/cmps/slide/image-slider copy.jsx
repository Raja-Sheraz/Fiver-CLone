import React, { useState } from 'react'

export default function ImageSlider({ gig }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const slides = [
    { url: `${gig.imgUrl[0]}`, title: '1' },
    { url: `${gig.imgUrl[1]}`, title: '2' },
    { url: `${gig.imgUrl[2]}`, title: '3' }
  ]
  const sliderStyles = {
    height: '100%',
    position: 'relative'
  }
  const slideStyles = {
    width: '100%',
    height: '100%',
    backgroundImage: `url(${slides[currentIndex].url})`,
    borderRadius: '10px',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  }
  const rightArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  }

  const leftArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  }
  const dotsContainerStyles = {
    display: "flex",
    justifyContent: "center",
  }

  const dotStyle = {
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "20px",
  }
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  }
  return (
    <div style={sliderStyles}>
      <div style={leftArrowStyles} onClick={goToPrevious} >❰</div>
      <div style={rightArrowStyles} onClick={goToNext}>❱</div>
      <div style={slideStyles}></div>
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            style={dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  )
}

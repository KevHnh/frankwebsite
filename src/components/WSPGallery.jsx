import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronLeft, faCircleChevronRight, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './WSPGallery.css'
import useKeypress from 'react-use-keypress';

const WSPGallery = ({galleryImages}) => {
  let [slideNumber, setSlideNumber] = useState(0)
  let [openModal, setOpenModal] = useState(false)

  let handleOpenModal = (index) => {
    setSlideNumber(index)
    setOpenModal(true)
  }

  useKeypress(['Escape', 'ArrowLeft', 'ArrowRight'], (event) => {
    if (openModal && event.key === "Escape") {
      handleCloseModal();
    }
    else if (openModal && event.key === "ArrowRight") {
      nextSlide();
    }
    else if (openModal && event.key === "ArrowLeft") {
      prevSlide();
    }
  });

  // Close Modal
  let handleCloseModal = () => {
    setOpenModal(false)
  }

  // Previous Image
  let prevSlide = () => {
    slideNumber === 0 ? setSlideNumber( galleryImages.length - 1) : setSlideNumber(slideNumber - 1 )
  }

  // Next Image  
  let nextSlide = () => {
    slideNumber + 1 === galleryImages.length ? setSlideNumber(0) : setSlideNumber(slideNumber + 1)
  }

  return (
    <div>
      {openModal && 
        <div className='sliderWrap'>
          <FontAwesomeIcon icon={faCircleXmark} className='btnClose' onClick={handleCloseModal} onKeyPress={handleCloseModal} style={{fontSize:"2rem"}}/>
          <FontAwesomeIcon icon={faCircleChevronLeft} className='btnPrev' onClick={prevSlide} style={{fontSize:"2rem"}}/>
          <FontAwesomeIcon icon={faCircleChevronRight} className='btnNext' onClick={nextSlide} style={{fontSize:"2rem"}}/>
          <div className='fullScreenImage' onClick={handleCloseModal}>
            <img src={galleryImages[slideNumber].img} alt=''/>
          </div>
        </div>
      }
      <div className='galleryWrap'>
        {
          galleryImages && galleryImages.map((slide, index) => {
            let src = slide.img

            return(
              <div className='single' key={index} onClick={ () => handleOpenModal(index) }>
                <LazyLoadImage effect="blur" src={src}/>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default WSPGallery
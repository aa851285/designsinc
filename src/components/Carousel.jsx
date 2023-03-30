import React from 'react'
import { useSprings, animated } from 'react-spring';
import image1 from 'https://images.pexels.com/photos/15759974/pexels-photo-15759974.jpeg';
import image2 from 'https://images.pexels.com/photos/15759974/pexels-photo-15759974.jpeg';
import image3 from 'https://images.pexels.com/photos/15759974/pexels-photo-15759974.jpeg';


function Carousel() {
    const images = [
        { id: 1, src: image1 },
        { id: 2, src: image2 },
        { id: 3, src: image3 }
      ];
    
      const springs = useSprings(images.length, images.map((image) => ({
        from: { rotation: [0, 0, 0] },
        to: { rotation: [0, 2 * Math.PI, 0] },
        loop: true,
        config: { duration: 10000 }
      })));
    
      return (
        <div className="carousel-container">
          {springs.map((animation, index) => (
            <animated.img
              key={images[index].id}
              style={{
                ...animation,
                transform: animation.rotation.interpolate(
                  (x, y, z) => `rotateY(${y}rad) translateZ(200px)`
                )
              }}
              src={images[index].src}
              alt="carousel image"
            />
          ))}
        </div>
      )
}

export default Carousel
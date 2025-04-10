import car1 from './assets/images/2019 McLaren Senna-door-open.jpg'
import car2 from './assets/images/2019 McLaren Senna-engine.jpg'
import car3 from './assets/images/2019 McLaren Senna-from-behind.jpg'
import car4 from './assets/images/2019 McLaren Senna-side-view.jpg'
import car5 from './assets/images/2023 Rimac Nevera-door-open.jpg'
import ImageSlider from './components/ImageSlider'

const IMAGES = [car1, car2, car3, car4, car5]

function App() {
  return (
    <div
      style={{
        maxWidth: '1200px',
        width: '100%',
        aspectRatio: '10/6',
        margin: '0 auto',
      }}
    >
      <ImageSlider imageUrls={IMAGES} />
    </div>
  )
}

export default App

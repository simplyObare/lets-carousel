import Carousel from './components/Carousel'
import car1 from './assets/images/2019 McLaren Senna-door-open.jpg'
import car2 from './assets/images/2019 McLaren Senna-engine.jpg'
import car3 from './assets/images/2019 McLaren Senna-from-behind.jpg'
import car4 from './assets/images/2019 McLaren Senna-side-view.jpg'
import car5 from './assets/images/2023 Rimac Nevera-door-open.jpg'

const slides = [car1, car2, car3, car4, car5]

function App() {
  return (
    <main className="grid  place-items-center mt-14">
      <div className="max-w-lg">
        <Carousel autoSlide={true}>
          {slides.map((s) => (
            <img src={s} />
          ))}
        </Carousel>
      </div>
    </main>
  )
}

export default App

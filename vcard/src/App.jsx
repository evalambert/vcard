import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <h1>Eva Lambert</h1>
      </header>

      <main>
        <p> 
          <span class="font-graphic one">(</span> 
          <span class="font-web">Web development</span>
          <br />
          <span class="font-graphic two">Graphic design )</span>
        </p>
      </main>

      <footer>
        <address>
          <div class="mobile wrap-img">
            <img src="img/4.jpg" alt="croix"/>
          </div>

          <div class="container">
            <p>+33 6 456 678 879</p>
            <div class="desktop wrap-img">
              <img  src="img/4.jpg" alt="croix"/>
            </div>
            <a href="mailto:lamberteva@hotmail.fr">lamberteva<span class="font-carta">@</span>hotmail.fr</a>
            <div class="desktop wrap-img">
              <img  src="img/4.jpg" alt="croix"/>
            </div>
            <a href="https://www.greta-oto.xyz/">www.greta-oto.xyz</a>
          </div>

          <div class="mobile wrap-img">
            <img  src="img/4.jpg" alt="croix"/>
          </div>
        </address>
      </footer>
    </>
  )
}

export default App

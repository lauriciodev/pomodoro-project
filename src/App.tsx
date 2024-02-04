import Pomo from './components/Pomodoro';
import { FaHeart } from "react-icons/fa";


function App() {

  return (
    <>
   <div className='container'> 
    <Pomo pomodoroTime={1500}
    shortTime={300}
    longTime={600}
    cycles={4}
    />

  </div>
  <footer className='footer__container'>
       <p>copyrigth Todos os Direitos Reservados</p>
       <p>Feito com <FaHeart color='red' /> por <a href="http://masterlauricio.netlify.app">Lauricio De Sousa </a></p>
    </footer>

    </>

  )
}

export default App

import Pomo from './components/Pomodoro';
import MyFooter from "./components/MyFooter";

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
   <MyFooter/>

    </>

  )
}

export default App

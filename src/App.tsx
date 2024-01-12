import Pomo from './components/Pomodoro';

function App() {

  return (
   <div className='container'> 
    <Pomo pomodoroTime={500}
    shortTime={500}
    longTime={500}/>
  </div>
  )
}

export default App

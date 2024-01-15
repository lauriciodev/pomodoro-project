import Pomo from './components/Pomodoro';

function App() {

  return (
   <div className='container'> 
    <Pomo pomodoroTime={500}
    shortTime={200}
    longTime={300}/>
  </div>
  )
}

export default App

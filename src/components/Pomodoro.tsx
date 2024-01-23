import { useEffect, useState } from 'react'
import { useInterval } from '../hooks/useIterval';
import Button from './button';
import Timer from './timer';
import "../App.css"

interface typeProps{
  pomodoroTime:number;
  shortTime:number;
  longTime:number;
}

function Pomo(props:typeProps) {
const [mainTime, setMainTime] = useState(props.pomodoroTime);
const [running, setRunning] = useState(false);
const [working, setWorking] = useState(false);
const [resting, setResting] = useState(false);

useEffect(() =>{
  if(working){
    document.body.classList.add("working")
  }
  if(resting){
    document.body.classList.remove("working")
  }

}, [working,resting]);

useInterval(() =>{
setMainTime(mainTime -1)
}, running ? 1000 : null)

const configureTime = () =>{
  setRunning(true);
  setWorking(true);
  setResting(false);

  setMainTime(props.pomodoroTime)
}

const configureRestingTime = (isLongTime:boolean) =>{
  setRunning(true);
  setResting(true);
  if(isLongTime){
    setMainTime(props.longTime);
  }else{
    setMainTime(props.shortTime);
  }
}

return (
  <div className='pomodoro'>
    <h4>Você está: em ação</h4>
    <Timer mainTime={mainTime}/>

    <div className="controls">
    <Button className='button' clickFunction={() => configureTime()} text='Trabalho'/>
   <Button className='button' clickFunction={() => configureRestingTime(true)} text='Descanso'/>
   <Button className={!working && !resting ? "hidden": "button"} clickFunction={() => setRunning(!running) } text={
    running ? "Pause" : "Play"
   }/>
    </div>

    <div className='notes__container'>
      <p>testando testando testando</p>
      <p>testando testando testando</p>
      <p>testando testando testando</p>
      <p>testando testando testando</p>
    </div>
   
</div>
  )
}

export default  Pomo

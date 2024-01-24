import { useEffect, useState } from 'react'
import { useInterval } from '../hooks/useIterval';
import Button from './button';
import Timer from './timer';
import "../App.css"
// eslint-disable-next-line @typescript-eslint/no-var-requires
import finishSong from "../sounds/bell-finish.mp3"
// eslint-disable-next-line @typescript-eslint/no-var-requires
import startSong from '../sounds/bell-start.mp3'
import pauseSong from '../sounds/bell-pause.mp3'

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

const finish = new Audio(finishSong);
const start = new Audio(startSong);
const pause = new Audio(pauseSong);

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

  setMainTime(props.pomodoroTime);
  start.play();
}

const configureRestingTime = (isLongTime:boolean) =>{
  setRunning(true);
  setResting(true);
  if(isLongTime){
    setMainTime(props.longTime);
    finish.play()
  }else{
    setMainTime(props.shortTime);
    finish.play()

  }
}


const playPause = () =>{
  setRunning(!running);
  pause.play();
}

return (
  <div className='pomodoro'>
    <h4>Você está: em ação</h4>
    <Timer mainTime={mainTime}/>

    <div className="controls">
    <Button className='button' clickFunction={() => configureTime()} text='Trabalho'/>
   <Button className='button' clickFunction={() => configureRestingTime(true)} text='Descanso'/>
   <Button className={!working && !resting ? "hidden": "button"} clickFunction={() => playPause() } text={
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

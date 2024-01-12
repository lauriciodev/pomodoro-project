import { useState } from 'react'
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

useInterval(() =>{
setMainTime(mainTime -1)
}, 1000)

return (
  <div className='pomodoro'>
    <h4>Você está: em ação</h4>
    <Timer mainTime={mainTime}/>

    <div className="controls">
    <Button className='button' clickFunction={() =>{
    console.log("lauricio");
   }} text='Parar'/>
   <Button className='button' clickFunction={() =>{
    console.log("lauricio");
   }} text='Parar'/>
   <Button className='button' clickFunction={() =>{
    console.log("lauricio");
   }} text='Parar'/>
    </div>
   
</div>
  )
}

export default  Pomo

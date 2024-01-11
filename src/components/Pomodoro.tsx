import { useState } from 'react'
import { useInterval } from '../hooks/useIterval';
import Button from './button';
import Timer from './timer';

interface typeProps{
  defaultPomodoroType:number
}

function Pomo(props:typeProps) {
const [mainTime, setMainTime] = useState(props.defaultPomodoroType);

useInterval(() =>{
setMainTime(mainTime -1)
}, 1000)

return (
  <div className='pomodoro'>
    <h4>Você está: em ação</h4>
    <Timer mainTime={mainTime}/>
   <Button className='button' clickFunction={() =>{
    console.log("lauricio");
   }} text='Parar'/>
</div>
  )
}

export default  Pomo

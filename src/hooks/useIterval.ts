import { useEffect, useRef } from 'react';

export function useInterval<C extends CallableFunction>(callback:C,delay: number | null ):void{
  const saveCallBack = useRef<C>();

  //remenber the last callback

  useEffect(() =>{
    saveCallBack.current = callback;
  },[callback]);

  // setup intervall 

  useEffect(() =>{
   function tick(){
    if(saveCallBack.current) saveCallBack.current();
   }

   if(delay !== null){
    const id = setInterval(tick, delay);
    return () => clearInterval(id);
   }
  },[callback]);


}
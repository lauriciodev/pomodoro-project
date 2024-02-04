export function convertTime(time:number): string{
  const zeroLeft = (n:number) => Math.floor(n).toString().padStart(2,"0");
  const hor = zeroLeft(time / 3600); 
  const min = zeroLeft((time / 60) % 60); 
  const sec = zeroLeft((time % 60) % 60); 
 return `${hor}:${min}:${sec}`
}
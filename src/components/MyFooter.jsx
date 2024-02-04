import { FaHeart } from "react-icons/fa";

import "../App.css"

export default function MyFooter(){
  return(
    <footer className='footer__container'>
       <p>copyrigth Todos os Direitos Reservados</p>
       <p>Feito com <FaHeart color='red' /> por <a href="http://masterlauricio.netlify.app">Lauricio De Sousa </a></p>
    </footer>
  )
}


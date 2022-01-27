import React  from 'react'
import logo from '../imagenes/marvel.png'
import { useNavigate} from 'react-router-dom'


const Start = () => {
    
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/characters');
}
    
    return ( 
      <div className = 'animated logo' >
        {/* <img src= {logo}  alt="" /> */}
        <input id="start" class="animated flash" width={800}
        TYPE="IMAGE" 
        onClick={handleClick} 
        SRC={logo} >
        </input>
      </div>
    )


}

export default Start

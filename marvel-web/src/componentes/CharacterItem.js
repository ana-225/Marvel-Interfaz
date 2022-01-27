import React  from 'react'
import { useState, useEffect } from "react"
import axios from 'axios'
import moment from 'moment'
import Search from './Search'



const CharacterItem = ()=>{

  const[character, setCharacter]=useState([])
  const [query,setQuery] = useState('')
 
      useEffect(()=> {
        axios.get('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=c66aa45160257bef3f557f13a814ea58&hash=61198adc6ab77ec06681a60a7603c719')
        .then(res=>{
          setCharacter(res.data.data.results)
          }).catch(error=>console.log(error))
         },[query])
          console.log(character);
  
  
    return (

    <div className="App">
      <h1>M</h1>
      <Search search={(q)=>setQuery(q)}></Search>
      <div className='container-cards'>
        { character.map( per=>(
      <div className="col card-container" key={per.id}>
        <div className="card card-front" style={{width: "20rem" , height: "20rem"}}>
          <img src=  {`${per.thumbnail.path}.${per.thumbnail.extension}`}className="card-img-top" alt="..." style={{width: "80%" , height: "80%"}}/>
          <div className="card-body">
              <h5 className="card-title">{per.name}</h5>
              {<p className="card-text">{moment(per.modified).format('DD/MM/YYYY')}</p>}
              <p className="card-text">{per.description}</p>
          </div>
        </div>
  
      </div>
          ))
        }
      </div>

    </div>
     );
}

 export default CharacterItem
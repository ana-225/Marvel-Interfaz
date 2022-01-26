// import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import{useState, useEffect} from 'react'

//https://gateway.marvel.com:443/v1/public/characters?apikey=c66aa45160257bef3f557f13a814ea58

//key privada: 4c522bd052e0036c8e551418a9ab46cbed23cdfb
//key public: c66aa45160257bef3f557f13a814ea58
//ts: 1
//md5: 14c522bd052e0036c8e551418a9ab46cbed23cdfbc66aa45160257bef3f557f13a814ea58
//hash:  61198adc6ab77ec06681a60a7603c719


function App() {

  const[personajes, setPersonajes]=useState([])

  useEffect(()=> {
    axios.get('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=c66aa45160257bef3f557f13a814ea58&hash=61198adc6ab77ec06681a60a7603c719')
    .then(res=>{
      setPersonajes(res.data.data.results)
    
    }).catch(error=>console.log(error))
  },[])

  console.log(personajes);
  return (
  
    <div className="App">
      <h1>Marvel</h1>
      
      <div className="row row-cols-1 row-cols-md-2 g-4">
     
     { personajes.map( per=>(

       <div className="col" key={per.id}>
      <div className="card" style={{width: "20rem" , height: "20rem"}}>
        <img src=  {`${per.thumbnail.path}.${per.thumbnail.extension}`}className="card-img-top" alt="..." style={{width: "80%" , height: "80%"}}/>
      <div className="card-body">
    <h5 className="card-title">{per.name}</h5>
        <p className="card-text">{per.description}</p>
        {<p className="card-text">{per.modified}</p>}
        <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</div>
))
}
    </div>

</div>
     );
}
  


export default App;

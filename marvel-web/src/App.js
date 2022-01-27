import './App.css';
import CharacterItem from './componentes/CharacterItem';
import Start from './componentes/Start';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

const  App = () => {
  return (
    <Router>
     <div className='className="container'>
       <Routes>
       <Route exact path="/" element={<Start/>}/>
          
        
        <Route path = '/characters' element={<CharacterItem/>}/>
         
      </Routes>
    </div>
    </Router>
  );
}

export default App;


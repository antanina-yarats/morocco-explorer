import { useState } from 'react';
import {data} from './data';
import Site from './Site';
import './App.css';

function App() {

const[sites, setSites] = useState(data);
console.log(data);


const removeItem = (id) => {
  let newSites = sites.filter((site) => site.id !== id);
  setSites(newSites);
}


  return (
    <div className='container'>
      <div className='wrapper'>

      <div className="container">
        <h1 className='bold'>Welcome to Morocco!</h1>
        <h2>You have <span>{sites.length}</span> sites to explore</h2>
      </div>

     {sites.map((element)=> (
      <Site key={element.id} {...element} removeItem={()=>removeItem(element.id)} />
      )
     )}
    </div>

     <div className='container'>
      <button className='btnAll' onClick={()=>setSites([])}>Explored all</button>
     </div>
 
    </div>
  )
}


export default App;

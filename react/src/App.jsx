import React from 'react' 
import Card from './components/Card'  
import './App.css'
import Navbar from './component/Navbar.jsx'
import './component/navbar.css'
import './component/Card.css'

function App() {
  return (
    <div>
      
     <Card name="Mohan" edu="10 class"/>
     <br/>
     <Card name="sohan" edu="12 class"/>
     <br/>
     <Card name="rohan" edu=""/>
    </div>
  )
}
export default App
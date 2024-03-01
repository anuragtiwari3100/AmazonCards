import { useState } from 'react'
import "./App.css";
import ProductTab from './ProductTab.jsx';


function App() {
 let styles={
  backgroundColor:"rgb(255, 179, 203)",
 }

  return (
  <>

<h1><b style={styles}>Blockbuster Offer | Showp Now </b></h1>

    <ProductTab/> 
    <h1 style={styles}>Contact me:-916204837397 ,Anurag</h1>
  </> 
  )
}

export default App

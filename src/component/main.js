import Logo from './logo.js'
import Bg from './bg.js'
import Section1 from './section1.js'
import Section2 from './section2.js'
import Section3 from './section3.js'
import { useState } from 'react';

function Main() {
  
  const [inputValues, setInputValues] = useState({
    bgColor : '',
    cubeColor : '',
    cubeSpeed : '',
  })
  const inputChange = (name, value) => {
    setInputValues((prevValues)=>({
      ...prevValues,
      [name] : value,
    }))
  }
  return (
    <div className="App">
        <Logo onInputChange={inputChange}/>
        <Bg inputValues={inputValues}/>
        <Section1/>
        <Section2/>
        <Section3/>
    </div>
  );
}

export default Main;
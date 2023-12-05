import Logo from './logo.js'
import Bg from './bg.js'
import Section1 from './section1.js'
import Section2 from './section2.js'
import Section3 from './section3.js'
import Section4 from './section4.js'
import { useState } from 'react';

function Main() {
  
  const [inputValues, setInputValues] = useState({
    bgColor : '',
  })
  const inputChange = (name, value) => {
    setInputValues((prevValues)=>({
      ...prevValues,
      [name] : value,
    }))
    console.log(inputValues.bgColor)
  }
  return (
    <div className="App">
        <Logo inputValues={inputValues}/>
        <Bg inputValues={inputValues}/>
        <Section1 inputValues={inputValues} onInputChange={inputChange}/>
        <Section2/>
        <Section3 inputValues={inputValues}/>
        <Section4/>
    </div>
  );
}

export default Main;
// Main.js

import Logo from './logo.js';
import Bg from './bg.js';
import Section1 from './section1.js';
import Section2 from './section2.js';
import Section3 from './section3.js';
import Section4 from './section4.js';
import { useState } from 'react';

function hexToRgb(hex) {
  // HEX에서 RGB 로 변환
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgb(${r}, ${g}, ${b})`;
}

function rgbChangeFunc(color) {
  // HEX 형식인 경우 RGB로 변환
  const rgbColor = color.startsWith('#') ? hexToRgb(color) : color;
  // RGB 형식에 맞는지 정규식으로 확인
  const rgbRegex = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/;
  const match = rgbColor.match(rgbRegex);
  // RGB 값 추출 및 숫자로 변환
  const values = match.slice(1).map(Number);
  // 밝기 계산
  const brightness = (values[0] * 299 + values[1] * 587 + values[2] * 114) / 1000;
  return brightness;
}


function Main() {
  const [inputValues, setInputValues] = useState({
    bgColor: '',
  });

  const inputChange = (name, value) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // RGB 값을 추출하고 밝기 계산
  const brightness = inputValues.bgColor ? rgbChangeFunc(inputValues.bgColor) : 0;

  // 밝기에 따라 글자 색상 결정
  const textColor = brightness > 150 ? '#050505' : '#f1f1f1';

  return (
    <div className="App">
      <Logo inputValues={inputValues} textColor={textColor} />
      <Bg inputValues={inputValues} />
      <Section1 inputValues={inputValues} onInputChange={inputChange} textColor={textColor} />
      <Section2 textColor={textColor}/>
      <Section3 inputValues={inputValues} textColor={textColor} />
      <Section4 textColor={textColor}/>
    </div>
  );
}

export default Main;
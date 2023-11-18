import './App.css';
import {Routes, Route} from "react-router-dom"
import Main from './component/main.js'



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/Portfolio/' element={<Main/>} />
      </Routes>
    </div>
  );
}

export default App;

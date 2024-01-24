import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./Assest/Home";
import About from "./Assest/About";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        
    <Routes>
<Route path='/' element={<Home/>} />
<Route path='/About' element={<About/>} />
{/* <Route path='/' element={</>} /> */}
{/* <Route path='/' element={</>} /> */}
{/* <Route path='/' element={</>} /> */}
{/* <Route path='/' element={</>} /> */}
    </Routes>
      </header>
    </div>
  );
}

export default App;

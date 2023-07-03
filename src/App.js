import './App.css';
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Colors from "./components/Colors";
import Typography from './components/Typography';
import Spaces from './components/Spaces';
import Buttons from './components/Buttons';
import Inputs from './components/Inputs';
import Grid from './components/Grid';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <Sidebar />
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/colors" element={<Colors/>}/>
          <Route path="/typography" element={<Typography/>}/>
          <Route path="/spaces" element={<Spaces/>}/>
          <Route path="/buttons" element={<Buttons/>}/>
          <Route path="/inputs" element={<Inputs/>}/>
          <Route path="/grid" element={<Grid/>}/>
        </Routes>
      </div>
      <footer>Created by <b>Aviv Adgah</b></footer>
    </div>
  );
}

export default App;

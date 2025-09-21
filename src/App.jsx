import './App.css';
import Accordian from "./components/1.Accordian/Accordian.jsx";
import ColorChanger from './components/2.ColorChanger/ColorChanger.jsx';
import { Toaster } from 'react-hot-toast';

function App() {
  return(
    <div>
      {/* <Accordian /> */}
      <ColorChanger />
      < Toaster />
    </div>
  )
}

export default App

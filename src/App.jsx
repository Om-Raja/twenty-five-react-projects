import './App.css';
import Accordian from "./components/1.Accordian/Accordian.jsx";
import ColorChanger from './components/2.ColorChanger/ColorChanger.jsx';
import StarRating from './components/3.Star-rating/StarRating.jsx';
import { Toaster } from 'react-hot-toast';

function App() {
  return(
    <div>
      {/* <Accordian /> */}
      {/* <ColorChanger /> */}
      <StarRating noOfStars={10} />
      < Toaster />
    </div>
  )
}

export default App

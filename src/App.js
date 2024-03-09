import './App.css';
import { AluminumWindows } from './components/AluminumWindows';
import { BathroomPartitions } from './components/BathroomPartitions';
import ContactInformation from './components/ContactInformation';
import { OurProducts } from './components/OurProducts';
import { OurServices } from './components/OurServices';
import { StarBar } from './components/StarBar';
import { SteelHandrail } from './components/SteelHandrail';
function App() {
  return (
    <>
      <StarBar/>
      <OurProducts/>
      <BathroomPartitions/> 
      <SteelHandrail/>
      <AluminumWindows/>
      <OurServices/>
      <ContactInformation/>
    </>
  );
}

export default App;

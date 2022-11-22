import bmw from './bmw.jpg'
import audi from './audi.jpg'
import jaguar from './jaguar.jpg'
import mercedes from './mercedes.jpg'
import './App.css';
import Card from './card';

function App() {
  return (
    <div className='cars'>
         <Card car={bmw} name="BMW"/>
         <Card car={audi} name="AUDI"/>
         <Card car={jaguar} name="JAGUAR"/>
         <Card car={mercedes} name="MERCEDES"/>
    </div>
  );
}

export default App;

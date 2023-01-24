
import './App.css';
import freecodecamplogo from './imagenes/FreeCodeCampLogo.png'
import Boton from './componentes/Boton'
function App() {
  return (
    <div className='App'>
      <div cassName='freecodecamp-logo-contenedor'>
<img 
src={freecodecamplogo}
className='freecodecamp-logo'
alt='Logo de freeCodeCamp' />
<div className='contenedor-calculadora'></div>
<div className='fila'><boton>1</boton></div>
<div className='fila'></div>
<div className='fila'></div>
<div className='fila'></div>
<div className='fila'></div>
      </div>
    </div>
  );
}

export default App;

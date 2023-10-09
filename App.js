import {BrowserRouter, Route, Routes} from 'react-router-dom' 
import Inicio from './screens/Inicio';
import Login from './screens/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

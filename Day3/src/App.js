import {Route,Routes,Link} from 'react-router-dom';
import Login from './pages/login';
import Signup from './pages/singup';
import ResetPassword from './pages/reset';
import Forgott from './pages/forget';

import './App.css';

function App() {
  return (
    <div className='App'>  
     <Routes>
<Route path='/' element={<Login/>}/>
<Route path='/signup' element={<Signup/>}/>
<Route path='/reset' element={<ResetPassword/>}/>
<Route path='/forget' element={<Forgott/>}/>

    </Routes>
      </div>
  );
}
export default App;
import{Landing, Error, Register, Dashboard} from './pages'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Jobs,Profile,Resume,SharedLayout,Home} from './pages/dashboard'


function App() {
  return (
  <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SharedLayout/>}> 
      <Route index element={<Home/>}/>
        <Route path='jobs' element={<Jobs/>}/>
        <Route path='profile' element={<Profile/>}/>
        <Route path='resume' element={<Resume/>}/>
      
      </Route>
      <Route path="landing" element={<Landing/>}/>
      <Route path="register" element={<Register/>}/>
      <Route path="*" element={<Error/>}/>
      </Routes> 
    <ToastContainer position='top-center' />
    </BrowserRouter>
  </div>
  
  );
}

export default App;

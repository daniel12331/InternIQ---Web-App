import{Landing, Error, Register, RegisterEmployer, ProtectedRoute} from './pages'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Jobs,Profile,Resume,SharedLayout,Home} from './pages/dashboard';
import {AddJobs,EmployerProfile,EmployerSharedLayout,EmployerHome,EmployerJobsListed} from './pages/dashboardEmployer';

function App() {
  return (
  <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<ProtectedRoute><SharedLayout/></ProtectedRoute>}> 
      <Route index element={<Home/>}/>
        <Route path='jobs' element={<Jobs/>}/>
        <Route path='profile' element={<Profile/>}/>
        <Route path='resume' element={<Resume/>}/>
      </Route>

      <Route path="/employer/" element={<ProtectedRoute><EmployerSharedLayout/></ProtectedRoute>}> 
      <Route index element={<EmployerHome/>}/>
        <Route path='addjobs' element={<AddJobs/>}/>
        <Route path='employerprofile' element={<EmployerProfile/>}/>
        <Route path='employerjobslisted' element={<EmployerJobsListed/>}/>

      </Route>


      <Route path="registerEmployer" element={<RegisterEmployer/>}/>
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

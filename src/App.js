import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import Profile from './components/Profile';
import NavBar from './components/Navbar';
import BillPage from './components/BiilPage';
import CreateTeacherProfile from './components/CreateTeacherProfile';
import BillAmount from './components/BillAmount';
import LandingPage from './components/LandingPage';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<NavBar />}>
        <Route index element={<LandingPage />}></Route>
        <Route path='/home' element={<LandingPage />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/createprofile' element={<CreateTeacherProfile />}></Route>
        <Route path='/abillamount' element={<BillAmount />}></Route>
        <Route path='/billpage' element={<BillPage />}></Route>
      </Route>
    )
  );

  return (
    <div >
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import BillPage from './components/BiilPage';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Navbar />}>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/billpage' element={<BillPage/>}></Route>
      </Route>
    )
  );

  return (
    <div >
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;

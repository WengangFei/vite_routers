import { createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider,
 
  Route }
from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Service from './pages/service';
import SignIn from './pages/signIn.jsx';
import SignUp from './pages/signUp.jsx';
import LayOut from './pages/layOut.jsx';
import NewJobs from './pages/newJob.jsx';

const router = createBrowserRouter(
createRoutesFromElements(
  <Route path='/' element={ <LayOut /> }>
    <Route index element={ <Home />} />
    <Route path='/service' element={ <Service />} />
    <Route path='/about' element={ <About />} />
    <Route path='/signIn' element={ <SignIn />} />
    <Route path='signUp' element={ <SignUp />} />
    <Route path='new_jobs' element={ <NewJobs />} />
  </Route>
  )
);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App

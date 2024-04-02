import { createBrowserRouter, 
         createRoutesFromElements, 
         RouterProvider,
         Route,
         
         }
        from 'react-router-dom';
import {
        JobLayOut,
        Home,
        Service,
        SignIn,
        SignUp,
        About,
        NewJobs,
        Help,
        Questions,
        Contacts
      } from './pages';
import Error from './pages/error';
import { jobLoader } from './pages/newJobs/newJob';
import LayOut from './pages/layOut';
import JobDetails, { jobDetailsLoader } from './pages/newJobs/jobDetails';
import JobError from './pages/newJobs/jobError';
import CurrentJobError from './pages/newJobs/currentJobError';
import { signUpAction } from './pages/signUp';
import { signInAction } from './pages/signIn';




const router = createBrowserRouter(
createRoutesFromElements(
  <Route path='/' element={ <LayOut /> }>
    <Route index element={ <Home />} />
    <Route path='service' element={ <Service />} />
    <Route path='about' element={ <About />} />
    <Route path='signIn' element={ <SignIn />} action={ signInAction }/>
    <Route path='signUp' element={ <SignUp />} action={ signUpAction } />

  
    <Route path='new_jobs' element={ <JobLayOut />}>
      <Route 
            index
            element={ <NewJobs />}
            loader={ jobLoader }
            errorElement={<CurrentJobError />}
      />
      <Route 
            path=':id'
            element={<JobDetails />}
            loader={ jobDetailsLoader }
            errorElement={<JobError />}
      />
          
    </Route>
    

    <Route path='help' element={ <Help />} >
      <Route path='questions' element={ <Questions />}/>
      <Route path='contacts' element={ <Contacts /> }/>
    </Route>


    <Route path='*' element={ <Error /> }/>
  </Route>
  )
);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App


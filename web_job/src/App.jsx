import { createBrowserRouter, 
         createRoutesFromElements, 
         RouterProvider,
         Route,
         
         }
        from 'react-router-dom';
import { LayOut,
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
import { jobLoader } from './pages/newJob';



        

const router = createBrowserRouter(
createRoutesFromElements(
  <Route path='/' element={ <LayOut /> }>
    <Route index element={ <Home />} />
    <Route path='service' element={ <Service />} />
    <Route path='about' element={ <About />} />
    <Route path='signIn' element={ <SignIn />} />
    <Route path='signUp' element={ <SignUp />} />
    <Route path='new_jobs' 
          element={ <NewJobs />}
          loader={ jobLoader }
    />
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

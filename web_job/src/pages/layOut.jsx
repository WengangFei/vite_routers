import { Link, Outlet } from 'react-router-dom';
import BreadCrumb from './breadCrumb/breadCrumb';

function LayOut() {
  return (
    <div className='p-10 font-michroma'>
        <header>
            <nav className='grid max-sm:grid-cols-1 md:grid-cols-6 '>
                <h1 className='font-germania text-orange-600 text-4xl'>Job Monster</h1>
                <div className='col-span-4 flex justify-around text-slate'>
                    
                    <Link to='/'>Home</Link>
                    <Link to='/service'>Service</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/new_jobs'>New Jobs</Link>
                    <Link to='/help'>Help</Link>
                </div>
                
                <div className='text-center flex items-center gap-4 font-michroma text-sm'>
                    <Link to='/signIn' className='bg-red-300 p-2 rounded-lg' >Sign In</Link>
                    <Link to='/signUp' className='bg-blue-300 p-2 rounded-lg'>Sign UP</Link>
                </div>
            </nav>
            <div className='m-4'>
                <BreadCrumb />
            </div>
            
        </header>

        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default LayOut

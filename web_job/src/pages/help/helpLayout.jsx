import { Link, Outlet } from 'react-router-dom';

function Help() {
  return (
    <div>
      <p className='text-2xl font-bold'>Click either button below for help.</p>
      <div className='flex justify-around mt-10'>
        <Link to='questions' className='border-4 border-red-400 rounded-full p-3'>Questions</Link>
        <Link to='contacts' className='border-4 border-blue-400 rounded-full p-3'>Contacts</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Help

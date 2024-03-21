import { Link } from 'react-router-dom';

function Error() {
  return (
    <div>
      <p className='text-6xl text-bold p-6'>404 -- OPPS!</p>
      <p className='p-6'>The Page Not <span className="text-red-400 text-4xl">Found</span></p>

      <p className='p-6'>Please go back to Home Page by clicking here. 
      <Link to='/' className='underline text-blue-500 hover:underline-offset-4 px-2'>  Home Page</Link></p>
    </div>
  )
}

export default Error

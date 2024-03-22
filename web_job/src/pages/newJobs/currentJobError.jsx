
import { useRouteError,Link } from 'react-router-dom'

function CurrentJobError() {

    let error = useRouteError();

    return (
        <div className="leading-10">
            <p className="text-2xl font-bold text-red-500">OPPS!</p>
            <p>{error.message}</p>
            <div className="border-2 text-xl m-6 bg-red-400 text-white w-[130px] rounded-lg text-center">
                <Link to='/'>Go Back</Link>
            </div>
         </div>
  )
}

export default CurrentJobError

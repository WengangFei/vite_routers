
import { useLocation,Link } from 'react-router-dom'

function BreadCrumb() {

    let locationPath = useLocation().pathname.split('/').filter(item=>item!== '');
    let location = '';

    let crumb = locationPath.map((path,index)=>{
        location += `/${path}`;
        
        return (
            <div key={index} className='text-blue-400 underline text-sm'>
                <Link to={location}>{ path }</Link>
            </div>
        )
    });

    return (
        <div className='border-2 border-sky-500 p-2 rounded-lg w-fit'>
            { crumb }
        </div>
    )
    
}

export default BreadCrumb

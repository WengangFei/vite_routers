
import { useLoaderData, Link } from "react-router-dom";




export const jobLoader = async () =>{
  let data = await fetch('http://localhost:4000/careers');
  return await data.json();
}



function NewJobs() {
  const loader = useLoaderData();
 
  return (
    
   

      <div className="flex gap-20">
        <div >
          { loader.map(job => (
          <div key={job.id} className="my-4 border-2 p-2 rounded-lg">
            <Link to={ job.id.toString() }><span className="text-xs text-red-600">Job Title</span>:  {job.title}</Link>
          </div>
        ))}
        </div>

      </div>
   
  )
}

export default NewJobs

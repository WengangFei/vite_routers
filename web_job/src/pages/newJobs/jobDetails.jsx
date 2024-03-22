import { useLoaderData,Link } from "react-router-dom";


export const jobDetailsLoader = async({ params })=>{
   
    const { id } = params
    let data = await fetch('http://localhost:4000/careers/' + id);
    if(!data.ok) {
        throw Error('The page is not found!')
    }
    console.log('fuck')
    return data.json();
}

function JobDetails() {
    let job = useLoaderData();

    return (
        <div className="text-xl leading-10 ">
        <p>Job ID: { job.id }</p>
        <p>Job Title: { job.title }</p>
        <p>Job Salary: { job.salary }</p>
        <p>Job Location: { job.location }</p>
        <div className="border-2 text-xl m-6 bg-red-400 text-white w-[130px] rounded-lg text-center">
            <Link to='/new_jobs'>Go Back</Link>
        </div>
            
        </div>
        
    )
}

export default JobDetails
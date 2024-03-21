
import { useLoaderData } from "react-router-dom";




export const jobLoader = async () =>{
  let data = await fetch('http://localhost:4000/careers');
  
  return data.json();
}




function NewJobs() {
  const loader = useLoaderData();
 
  console.log(loader)
  return (
    <div>
      <p>new jobs.</p>
      {}
    </div>
  )
}

export default NewJobs

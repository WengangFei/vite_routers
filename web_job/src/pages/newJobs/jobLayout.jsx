import { Outlet } from "react-router-dom"


function JobLayOut() {
  return (
    <div className="p-10 text-sm">
        <p className="text-4xl font-bold py-5">All Current Jobs:</p>

        <Outlet />
    </div>
  )
}

export default JobLayOut

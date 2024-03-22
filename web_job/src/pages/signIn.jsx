
import { Form } from 'react-router-dom'

function SignIn() {
  return (
    <div className='flex flex-row justify-center items-center'>
      <Form method='post' action='/signIn' className='border-2 w-fit leading-3xl rounded-3xl p-2 '>
        <label>
          <span>Name:</span>
          <input type='text' name='name' className='border-2 p-1 rounded-lg m-2'/>
        </label><br />
        <label>
          <span>Email:</span>
          <input name='email' className='border-2 p-1 rounded-lg m-2'/>
        </label><br />
        <label>
          <span>PassWord:</span>
          <input name='password' className='border-2 p-1 rounded-lg m-2'/>
        </label><br />
        <button className='w-fit bg-red-300 rounded-lg p-1 ml-40'>Submit</button>
      </Form>
      
    </div>
  )
}

export const signinAction = async ({request})=>{

  let data = await request.formData();
  let submission = {
    name: data.get('name'),
    email: data.get('email'),
    password: data.get('password')
  }

  console.log(submission)
}
export default SignIn

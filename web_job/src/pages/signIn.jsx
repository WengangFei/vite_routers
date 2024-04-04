
import { Form,Link, redirect } from 'react-router-dom'

function SignIn() {
  return (
    <div className='grid grid-cols-1 place-items-center text-2xl leading-4'>
      <div className='text-2xl text-red-400 m-8'>
        Please Sign In Your Account
      </div>
      <Form method='post' action='/signIn' className='border-2 w-fit leading-3xl rounded-3xl p-8 '>
        <label>
          <span className='p-5'>Email:</span><br />
          <input name='email' className='border-2 p-1 rounded-lg m-8' required/>
        </label><br />
        <label>
          <span className='p-5'>PassWord:</span><br />
          <input name='password' className='border-2 p-1 rounded-lg m-8' required/>
        </label><br />
        <button className='w-fit bg-red-300 rounded-lg p-2 m-5 text-sm ml-64'>Log In</button>
        
        <p className='text-sm ml-20'>Not registered? 
            <Link to='/signUp' className='underline text-blue-400 ml-10'>
                Create an account
            </Link>
        </p>
      </Form>
      
    </div>
  )
}

export const signInAction = async ({request})=>{

  let data = await request.formData();
  let submission = {
    email: data.get('email'),
    password: data.get('password')
  }
console.log(submission)
  return redirect('/');
}
export default SignIn

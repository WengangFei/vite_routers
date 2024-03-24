import { Form, Link, useActionData } from 'react-router-dom'

function SignUp() {

  //give to submit data.
  const submitError = useActionData();
  let succeed = false;
  if(submitError === 'succeed') succeed = true;
  
  console.log('--' + submitError)
  return (
    <div className='grid grid-cols-1 place-items-center'>
        <h1 className='text-4xl font-bold m-4'>Sign-Up</h1>
        <h3 className='text-2xl font-bold m-4'>Enter your login credentials</h3>
        <Form method='post' action="/signUp" className='border-2 rounded-lg p-4 shadow-xl m-6'>
          <label>First Name:</label>
            <input
                type="text"
                name="first"
                required
                className='border-2 p-1 rounded-lg m-2'
            /><br />
 
          <label>Last Name:</label>
          <input
              type="text"
              name="last"
              required
              className='border-2 p-1 rounded-lg m-2'
          /><br />
 
          <label>Email:</label>
          <input
              type="email"
              name="email"
              required
              className='border-2 p-1 rounded-lg m-2'
          /><br />
 
          <label>Password:</label>
          <input
              type="password"
              name="password"
              required
              className='border-2 p-1 rounded-lg m-2'
          /><br />
 
          <label>Re-type Password:</label>
          <input
              type="password"
              name="repassword"
              required
              className='border-2 p-1 rounded-lg m-2'
          /><br />
          <button type="submit" className='w-fit bg-red-300 rounded-lg p-2 ml-40 m-4 text-sm'>
            Submit
          </button>
          
        <div className={ `text-red-400 ${submitError ? 'p-6' : ''} ` }>
          { submitError && submitError.error }
        </div>

          { 
            succeed && 
          <div>
             You are registered.
             <Link to='/' className='underline text-blue-400 text-xl mx-4'>Click Here</Link>
             return to home page.
          </div>
          
          }
       
        </Form>

    </div>
  )
}



export const signUpAction = async ({ request })=>{

  const data = await request.formData();
  const submission = {
    First_Name: data.get('first'),
    Last_Name: data.get('last'),
    email:data.get('email'),
    password: data.get('password'),
    repassword: data.get('repassword')

  }
  // send the value to useActionData() hook
  if(submission.password !== submission.repassword){
    return {error:'Passwords are not matching.'}
  }


  //direct to home
  return 'succeed';
}

export default SignUp

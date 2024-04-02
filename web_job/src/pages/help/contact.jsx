import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';


function Contacts() {

  // type help = {
  //   email: String,
  //   description: String,
  // }

const { register, handleSubmit, control, formState } = useForm();
//show error on client side.
const { errors } = formState;

// const { name, ref, onChange, onBlur } = register('name');

// form submit
let onSubmit = (data)=>{
  console.log(data)
}

  return (
    <div>
      <p className="text-2xl font-bold mt-6">Contact 311</p>
      <p className="my-6">
      calling 3-1-1 from within the City or 212-NEW-YORK outside the five boroughs. <br />
    
      </p>

      <form onSubmit={ handleSubmit(onSubmit)} noValidate >
      <label>
          <span>Name:</span>
          <input name='name' className='input-border' {...register('name',{
            required: {
              value: true,
              message: 'Name is required.'
            }
          })}/>
          <p className='text-red-500 text-sm'>{ errors.name?.message}</p>
        </label><br />

        <label>
          <span>Email:</span>
          <input name='email' className='input-border' {...register('email',{
            pattern:{
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message:' email is invalid.'
            },
            required:{
              value: true,
              message: 'email is required.'
            },
            //customize the validation, automatically receiving field value
            validate:{
              notAdmin: (fieldValue)=>
              fieldValue !== 'wengangfei@gmail.com' || 
              'Enter another email address.'
            },
            notGmail: (fieldValue)=>
              !fieldValue.endsWith('gmail.com') ||
              'Not accept the Gmail address.'
            
          })}/>
          <p className='text-red-500 text-sm'>{ errors.email?.message}</p>
        </label><br />

        <label>
          <span>Questions:</span>
          <input name='description' className='input-border' {...register('description',{
            required: 'Please put in your questions.'
          })}/>
          <p className='text-red-500 text-sm'>{ errors.description?.message}</p>
        </label><br />
        <button className='submit-button'>Submit</button>
      </form>
      <DevTool control={ control }/>

    </div>
  )
}

export default Contacts

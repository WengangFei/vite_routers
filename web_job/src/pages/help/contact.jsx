import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { useEffect, useState } from 'react';


function Contacts() {

// register: (name: string, RegisterOptions?) => ({ onChange, onBlur, name, ref })

  // errors show the error msg on the client side.
const { register, 
        handleSubmit, 
        control, 
        formState:{ errors, isDirty, isValid, dirtyFields, isSubmitting, 
           isSubmitted, isSubmitSuccessful },
        watch,//watch each field's input, what multiple fields
        // use array form, watch(['name','password'...])
        getValues,
        setValue,
        reset,
      } = useForm({
// default values object is a shape of the form. Each object key register the key name
// into each HTML form input field as the input field name by register function.
// name pro value from destructure {...register(name:string)} will be registered for field name.
  defaultValues: async ()=>{
    let resp = await fetch('https://jsonplaceholder.typicode.com/users/1');
    let data = await resp.json();
    // console.log(data)
    return {
      name: '',
      email: '',
      description: '',
      social:{
        twitter:'',
        facebook:''
      },
      phoneNumbers:['',''],
      age:'',
      dob:'',
    }
  },
// fields validation mode
  mode: 'all'
});
// useEffect to reset all fields value to default after submit form successfully.
useEffect(()=>{
  if(isSubmitSuccessful){
    reset();
  }
},[isSubmitSuccessful,reset]);


console.log({isSubmitting, isSubmitted, isSubmitSuccessful, isValid, isDirty})

//to display all input values on page.
const[getAllInputValues,setGetAllInputValues] = useState(false)
// Shows all errors when submit the form if there are any
const onError = (errors)=>{
  console.log(errors)
}
// watch object
// let watchInput = watch();

// const { name, ref, onChange, onBlur } = register('name');
console.log(errors)
// form submit
let onSubmit = (data)=>{
  console.log(data)

}

  return (
    <div>
      <p className="text-2xl font-bold mt-2">Contact 311</p>
      <p className="my-2">
      calling 3-1-1 from within the City or 212-NEW-YORK outside the five boroughs. <br />
    
      </p>

      <form onSubmit={ handleSubmit(onSubmit,onError)} noValidate className='py-6'>
      <label>
          <span>Name:</span><br />
          <input className='input-border' {...register('name',{
            required: {
              value: true,
              message: 'Name is required.'
            }
          })} placeholder='Your name'/>
          <p className='text-red-500 text-sm'>{ errors.name?.message}</p>
          {/* <p>{ watchInput.name }</p> */}
        </label>

        <label>
          <span>Email:</span><br />
          <input name='email' className='input-border' {...register('email',{
            pattern:{
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message:' email is invalid.'
            },
            required:{
              value: true,
              message: 'email is required.'
            },
            //customize the validation, automatically receiving field value.
            // validate object for multiple rules.
            validate:{
              notAdmin: (fieldValue)=>{
                return (
                  fieldValue !== 'wengangfei@gmail.co' || 
                  'Enter another email address.'
                )
              },
              notGmail: (fieldValue)=>{
                return (
                  //email restriction.
                   fieldValue.endsWith('') ||
                  'Only accept the Gmail address.'
                )
              },
              emailAvailable: async (fieldValue)=>{
                let resp = await fetch(`https://jsonplaceholder.typicode.com/users?email=${fieldValue}`);
                let databaseEmail = await resp.json();
                return (
                  databaseEmail.length === 0 || 
                  'This account already exist.'
                )
              }
            },
          })}/>
          <p className='text-red-500 text-sm'>{ errors.email?.message}</p>
          {/* <p>{ watchInput.email }</p> */}
        </label>

        <label>
          <span>Questions:</span><br />
          <input name='description' className='input-border' {...register('description',{
            required: 'Please put in your questions.'
          })} placeholder='Your questions'/>
          <p className='text-red-500 text-sm'>{ errors.description?.message}</p>
        </label>

        <label>
          <span>Facebook:</span><br />
          <input className='input-border' {...register('social.facebook',{
            required: 'Enter your facebook name.'
          })} placeholder='Your facebook name'/>
          <p className='text-red-500 text-sm'>{ errors.social?.facebook?.message}</p>
        </label>

        <label>
          <span>Twitter:</span><br />
          <input className='input-border' {...register('social.twitter',{
            required: {
              value: true,
              message:'Facebook required.'
            },
            // validate: {
            //   twitterAccountAvailable: async (fieldValue)=>{
            //     let resp = await fetch(`https://jsonplaceholder.typicode.com/users?${fieldValue}`);
            //     let databaseTwitterAccount = await resp.json();
            //     console.log('Twitter' + databaseTwitterAccount)
            //     return (
            //       databaseTwitterAccount.length === 0 || 
            //       'This twitter account already exist.'
            //     )
            //   }
            // }

          })} placeholder='Your twitter name'/>
          <p className='text-red-500 text-sm'>{ errors.social?.twitter?.message}</p>
        </label>

        <label>
          <span>Primary Number:</span><br />
          <input className='input-border' {...register('phoneNumbers.0')} placeholder='Your primary phone number.'/>
          <p className='text-red-500 text-sm'>{ errors.phoneNumbers?.[0]?.message}</p>
        </label>
          {/* <p>{ watch('phoneNumbers.0') }</p> */}

        <label>
          <span>Secondary Phone Number:</span><br />
          <input className='input-border' {...register('phoneNumbers.1')} placeholder='Your secondary phon number.'/>
          <p className='text-red-500 text-sm'>{ errors.phoneNumbers?.[1]?.message}</p>
        </label>
        {/* <p>{ watch('phoneNumbers.1') }</p> */}

        <label>
          <span>Age:</span><br />
          <input className='input-border' {...register('age',{
            valueAsNumber: true,
            // required: 'Please enter your age.'
          })} placeholder='Your age.' type='text'/>
          <p className='text-red-500 text-sm'>{ errors.age?.message}</p>
        </label>

        <label>
          <span>Date of birth:</span><br />
          <input className='input-border' {...register('dob',{
            valueAsDate: true,
            required: 'Please enter your dob.'
          })} placeholder='Your dob.' type='date'/>
          <p className='text-red-500 text-sm'>{ errors.dob?.message}</p>
        </label>


        <button className='submit-button' disabled={!isDirty || !isValid}>Submit</button>
        <button className='submit-button ml-8' onClick={()=>{
          let getAllFieldsnamesArray = Object.keys(getValues());
          getAllFieldsnamesArray.forEach(item=>{
      
            if(getValues()[item].constructor.name === 'Object'){
              for(const i in getValues()[item]){
                setValue((item+'.'+i),'');
              }
            }
            
            if(getValues()[item].constructor.name === 'Array'){
              for(const i in getValues()[item]){
                setValue((item+'.'+i),'');
              }
            }
            setValue(item,'')
          });
        }}>
          Reset All Inputs
        </button><br />
        <button className='submit-button' onClick={()=>reset()}>Reset</button>
        <button type='button' className='submit-button ml-8' onClick={()=>{
          setGetAllInputValues(true);
        }}>
          Show All Inputs
        </button>
      </form>
     
      { getAllInputValues && 
        <div>
          { Object.entries(getValues()).map(item=>{
            return(
              <div key={item[0]}>
                { item[0] } : { JSON.stringify(item[1]) }
              </div>
            )
          }) }
        </div>
      }
      <DevTool control={ control }/>

    </div>
  )
}

export default Contacts

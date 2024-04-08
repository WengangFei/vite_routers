import { useForm, useFieldArray } from 'react-hook-form';

function Questions() {

  const { register, handleSubmit, control, formState:{ errors }}
  = useForm({
    // defaultValues: {}; you can populate the fields by this attribute 
    defaultValues:{
      questions:[{ question:'' }],// useFieldArray is an object array.
    }
  });

  const { fields, append, remove } = useFieldArray({//return a fields objects of an array,each 
    // object is represent a field.
    name:'questions',//unique name for the Field Array.
    control,
  });

  let questionNumber = 0;

  return (
  <div>
    <p className='font-bold my-6 text-lg'>
      Please write down your question(s)  in below box(es):
    </p>
    <form onSubmit={handleSubmit(data => console.log(data))}>
      <div>
        {
          fields.map((field,index)=>{
            return (// field is an object, each field will be rendered as form control.
              //field.id react specified.
              <div key={field.id}>
                <label className='text-xs'>Question {++questionNumber}:</label><br />
                <input className='border-2 border-blue-300 rounded-md'
                type='text' {...register(`questions.${index}.question`,{
                  required:{
                    value:true,
                    message:'Can not be empty.'
                  }
                })}
                />
                {
                  index > 0 && (
                    <button type='button' className='text-xs bg-orange-300 p-1 rounded mx-2 my-2 text-white'
                    onClick={()=> remove(index)}>
                      Delete 
                    </button>
                  )
                }
                <p className='text-red-500 text-sm'>{ errors.questions?.[index]?.question?.message }</p><br />
              </div>
            )
          })
        }
        <button type='button' className='text-xs bg-blue-300 p-1 rounded my-2 text-white'
        // add one input field by click the button.
        // add an object into the object array name 'fields'.
         onClick={()=>append({ questions:'' })}>
          Add more Questions
        </button>
      </div>

      <button type='submit' className='bg-red-300 p-1 text-xs text-white rounded-md'>
        Submit
      </button>
    </form>

  </div>
  );
}


export default Questions

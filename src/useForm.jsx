import React, { useState } from 'react'

const useForm = ( initialForm ={}) => {
    const [formState, setFormState] = useState(initialForm);
   const onInputChage= ({target})=>{
     const {name, value} = target;
     setFormState({
        ...formState,
        [name]: value
     });
   }
    const onResetForm =()=>{
    setFormState(initialForm)
    }

  return {
    ...formState,
    formState,
    onInputChage,
    onResetForm
  }
}

export default useForm
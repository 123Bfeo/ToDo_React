import useForm from "./useForm"

const TodoAdd = ({onNewTodo}) => {
    const { description, onInputChage,onResetForm} = useForm({
        description: ''
    })
    const onFormSubmit = (e) =>{
        e.preventDefault();
        if(description.length <= 1) return;
        const newTodo={
            id:new Date().getTime(),
            done:false,
            description: description,
        }
        onNewTodo(newTodo)
        onResetForm()
    }
    return (
        <>
            <form  onSubmit={onFormSubmit}>
                <input 
                type="text" 
                placeholder='Tarea para hacer' 
                className='form-control'
                name="description"
                value={description}
                onChange={onInputChage}
                 />
                <button type='submit' className='btn btn-outline-primary mt-2'> enviar</button>
            </form>
        </>
    )
}

export default TodoAdd

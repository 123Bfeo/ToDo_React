import TodoList from './TodoList';
import TodoAdd from './TodoAdd';
import useTodo from './hook/useTodo';

const TodoListHook = () => {
  /* const onModeclaro = () => {
       let body = document.querySelector('body');
       body.style.background = "while";
   }
   const onModeOscuro = ()=>{
    let body = document.querySelector('body');
       body.style.background = "black";
       body.style.color = "white";
   }*/

  const {todos,todosCounter,pendingTodoCount, handleDeleteTodo,handleNewTodo,handleToggleTodo} = useTodo();
    return (
        <>  
        {/* <div>
            <button onClick={onModeclaro}>claro</button>
            <button onClick={onModeOscuro}>Oscuro</button>
        </div> */}
            <h1>TodoApp:{todosCounter}, <small>pendientes: {pendingTodoCount(todos)}</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList 
                    todos={todos} 
                    onDeleteTodo={handleDeleteTodo}
                    onToggleTodo={handleToggleTodo}
                    />
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                     <TodoAdd onNewTodo={handleNewTodo}/>
                </div>
            </div>

        </>
    )
}

export default TodoListHook

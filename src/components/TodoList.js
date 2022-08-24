import React from 'react'

function TodoList(props) {
    const completeTodo = (index) => {
        // if(index>=0 && index)
        const todoCopy = [...props.todo]
        todoCopy[index].completed = !todoCopy[index].completed
        props.setTodo(todoCopy)
    }

    const deleteTodo = (index) => {
        const todoCopy = [...props.todo]
        const filteredTodoCopy = todoCopy.filter((to, i) => {
            return i !== index
        })
        props.setTodo(filteredTodoCopy)
    }
    return (
        <div>
            <div className='conatiner mt-3' >
                <div className=''>
                    <div className='col-md-6 offset-3'>
                        {props.todo.length > 0 ? props.todo.map((to, index) => {
                            return <div className='card mt-2 border-3 bg-light' key={index} >
                                <div style={{ display: 'flex',justifyContent:'space-between',boxShadow:'1px 1px 10px blue'}}>
                                    <h5 style={to.completed ? { color: 'red', textDecoration: 'line-through' } : {}}>{to.task}</h5>
                                    <div>
                                        <button onClick={() => { completeTodo(index) }} className='btn btn-primary'>Completed</button>
                                        <button onClick={() => { deleteTodo(index) }} className='btn btn-warning'>Delete</button>
                                    </div>
                                </div>
                            </div>
                        })
                            :<h5 style={{marginTop:'-10px'}}>Please Add your Todo-task...</h5>}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TodoList

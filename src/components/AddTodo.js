import React from 'react'


function AddTodo(props) {
    const handelChange = (event) => {
        //console.log(event.target.value);
        const initalTodoCopy = { ...props.initialTodo }
        initalTodoCopy.task = event.target.value;
        initalTodoCopy.completed = false;
        props.setInitialTodo(initalTodoCopy)
       
    }

    const add=()=>{
        const todoCopy=[...props.todo]
        const index = todoCopy.findIndex(todo=>{
            return todo.task===props.initialTodo.task
        })
        if(index===-1){
            todoCopy.push(props.initialTodo)
            props.setTodo(todoCopy)
            }else{
            console.error('task is already Listed');
        }
    }
    return (
        <div>
            <div className='container mt-5 ' >
                <div className='col-md-5 offset-3' style={{boxShadow:'1px 1px 10px blue', }}>
                    <div className='card'style={{borderRadius:'20px'}}>
                        <div className='card-header'style={{background: 'linear-gradient(orange,white,green)'}}>
                            <h1 style={{color:'white',fontFamily:'cursive',fontSize:'60px',fontWeight:'bolder',backgroundColor:'maroon',borderRadius:'30px'}}>Todo-List!</h1>
                        </div>
                        <div className='card-body bg-dark'>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Add New..." name='task' value={props.initialTodo.task} onChange={(event)=>{handelChange(event)}} />
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary bg-primary " onClick={()=>{add()}}><span style={{color:'whitesmoke'}}><i class="fas fa-plus-circle"></i></span></button>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddTodo

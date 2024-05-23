import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import { useState } from 'react'
import { v4 as uuidv4  } from 'uuid'

const App = () => {
const [todo, setTodo] = useState("")
const [todos, setTodos] = useState([])
const [showFinish, setshowFinish] = useState(true)

  const handleAdd=(e)=>{
    setTodos([...todos,{id:uuidv4(),todo,isCompleted:false}]);
    setTodo("")
    saveToLS()

  }
  const handleDelete=(e,id)=>{
    
    let newTodos=todos.filter(item=>{
      return item.id!==id
    })
    setTodos(newTodos)
    saveToLS()

  }
  const handleEdit=(e,id)=>{
    let t=todos.filter(i=>i.id===id)
    setTodo(t[0].todo) 
    let newTodos=todos.filter(item=>{
      return item.id!==id
    })
   setTodos(newTodos)
    saveToLS()
        }

  const handleChange=(e)=>{
      setTodo(e.target.value)
      
  }
   
  const toggleHandle=()=>{
    setshowFinish(!showFinish)
  }
  const handleCheckBox=(e)=>{
   let Id= e.target.id;
   let index=todos.findIndex(item=>{
    return  item.id===Id
   }    
   )
   let newTodos=[... todos]
   newTodos[index].isCompleted=!newTodos[index].isCompleted;
   setTodos(newTodos)
   saveToLS()
  }
  const saveToLS=()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  }

  useEffect(() => {
    let todo=localStorage.getItem("todos")
    if(todo){
      let todos=JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
  }, [])
  

  return (

    
    <>
    <Navbar/>
      <div className='bg-violet-300 min-h-[80vh] mt-4 rounded-lg w-[65vw] mx-auto' >
        <h2 className='ml-12 pt-6 text-xl font-bold'>Add Your Todo</h2>
        <div className="addTodo ml-12 mt-3 flex  ">
          <input onChange={handleChange} value={todo} className='px-2 rounded-l-md w-2/3'  type="text" placeholder='Add your todo here' />
          <button onChange={toggleHandle} onClick={handleAdd} disabled={todo.length<=  3} className='bg-green-600 px-3 py-1 rounded-r-md hover:bg-green-700 disabled:bg-green-500'>Save</button>
        </div>
        
        <div className="toggleHide flex gap-2 ml-8 mt-6">
          <input type="checkbox" checked={showFinish} /> Show Completed.
        </div>

        <h2 className='text-xl font-bold mt-2 ml-12 '>Your Todos</h2>
        <div className="todos ml-12 mt-2 ">      
        {todos.length ===0 && <div className='mx-4'>No todos to display</div> }

        {todos.map(item=>{
      return  <div key={item.id} className="todo  flex   justify-between w-1/3 my-1">           
           <div className='flex  gap-3 '>
            <input onChange={handleCheckBox} type="checkbox" checked={item.isCompleted} id={item.id} />
           <div className={item.isCompleted?"line-through":"" } >{item.todo} </div>
           </div>
           <div className="buttons flex h-full">
           <button onClick={(e)=>{handleEdit(e,item.id)} }className='mx-2 ml-5 bg-blue-600 rounded-md px-3 py-1  hover:bg-blue-700'>Edit</button>
            <button onClick={(e)=>{handleDelete(e,item.id)} }
            className='mx-2 bg-red-600 rounded-md px-3 py-1  hover:bg-red-700 '>Delete</button>
           </div>
          </div>
            })}
        </div>

      </div>
    </>
  )
}

export default App

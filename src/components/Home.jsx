import React, { useState } from 'react';

function Home() {
  const [todos, setTodos] = useState([]);
  const [newtodo, setNewtodo] = useState('');

  const handleAddTodo = () => {
    if (newtodo.trim() !== '') {
      setTodos([...todos, { text: newtodo.trim(), checked: false }]);
      setNewtodo('');
    }
  }

  const handleToggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].checked = !newTodos[index].checked;
    setTodos(newTodos);
  }

  const handleTDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <>
      <div className='min-h-screen flex items-center justify-center rounded-md'>
        <div className='bg-white p-8 shadow-md rounded-md border-4'>
          <span className='text-5xl  text-black '>
            <h1 className='mb-10'>My Tasks </h1>
          </span>
          <div className="flex space-x-4 ">
            <input
              type="text"
              value={newtodo}
              onChange={(e) => setNewtodo(e.target.value)}
            className='border-4 rounded-md border-purple-500'/>
            <button className='rounded-lg p-2 bg-cyan-500' onClick={handleAddTodo}>
              Add
            </button>
          </div>
        
        <div className='flex justify-center '>
      <ul className=' h-auto'>
        {todos.map((todo, index) => (
          <li className='mr-16  mt-4 flex space-x-12' key={index}>
            <input type='checkbox' checked={todo.checked} onChange={() => handleToggleTodo(index)} />
            <span className={` p-2  ${todo.checked ? 'line-through':''} `}>{todo.text}</span>
            <button onClick={() => handleTDeleteTodo(index)} className='rounded-3xl p-2  bg-cyan-500'>
              Delete
            </button>
          </li>
        ))}
      </ul>
      </div>
      </div>
      </div>
    </>
  );
}

export default Home;

{/* <div className='flex space-x-2'>
                   <Icon icon="iconamoon:trash-light" iconclassName='grey' height='20' width='20'/>
                   <Icon icon="streamline:pencil" iconclassName='grey' height='18' width='20'/>
                   </div> */}

import noteImg from '../Components/img/notes.png';
import plusImg from '../Components/img/plus.png';
import doubleImge from '../Components/img/double-tick.png'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { clearCompleted} from '../Redux/Todo/action';
import addTodo from '../Redux/Thunk/addTodo';



export default function Header() {
  const [input , setInput]=useState('');
  const dispatch = useDispatch();


  const handleInput=(e)=>{

    setInput(e.target.value);

  }

  const handleSubmitted=(e)=>{

    e.preventDefault();
    dispatch(addTodo(input)); 
    setInput("")

    
  }

  const clearhandler=()=>{

    dispatch(clearCompleted())

  }
  
  return (
    <div>
      <form class="flex items-center bg-gray-100 px-4 py-4 rounded-md" onSubmit={handleSubmitted}>
      <img src={noteImg} class="w-6 h-6" alt="Add todo" />

        <input
          type="text"
          placeholder="Type your todo"
          class="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
          value={input}
          onChange={handleInput}
        />
        <button
          type="submit"
          class={ `appearance-none w-8 h-8 bg-[url(${plusImg})] bg-no-repeat bg-contain` }
        ></button>
      </form>

      <ul class="flex justify-between my-4 text-xs text-gray-500">
        <li class="flex space-x-1 cursor-pointer">
          <img class="w-4 h-4" src={doubleImge} alt="Complete" />
          <span>Complete All Tasks</span>
        </li>
        <li class="cursor-pointer"
        
        onClick={clearhandler}
        >Clear completed</li>
      </ul>
    </div>
  );
}

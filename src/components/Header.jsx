import { useContext } from "react";
import { taskcontext } from "../Context/TaskContext";

const Header = ()=>{
    const [tasks] = useContext(taskcontext);
    return (
        <div className='mt-[7%] w-[35%] h-[30vh] border rounded-3xl flex justify-around items-center'>
          <div className='text-yellow-100'>
            <h1 className='text-3xl font-bold'>LETS TODO</h1>
            <p>Keeps doing things</p>
          </div>
          <div className='text-3xl w-[10vmax] h-[10vmax] rounded-full bg-orange-600 font-extrabold flex justify-center items-center'>
            {tasks.filter((t)=> t.completed === true).length}/{tasks.length}
          </div>
        </div>
    )
    
}
export default Header;
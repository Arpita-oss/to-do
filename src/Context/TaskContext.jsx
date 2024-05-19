import { createContext , useState} from "react";

export  const taskcontext = createContext(null);

const TaskContext= (props) =>{
    const [tasks,settasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);

    return (<taskcontext.Provider value={[tasks,settasks]}>
            {props.children};
    </taskcontext.Provider>
    );
}

export default TaskContext;
import { Todo } from "@/App";
import { format } from "date-fns";

interface TodoProps {
    todo: Todo
}

export const TodoItem = (props: TodoProps) => {
    const {todo} = props;
    console.log(props);

    const current = new Date()
    // const bg = todo.dueDate <= new Date() ? "bg-red-500" : "bg-slate-300";
    let bg = "bg-slate-300";
    if (todo.dueDate <= current && todo .status != 'done') {
        bg = "bg-red-500";
    } else if (todo.status == 'done') {
        bg = "bg-green-300";
    }

    return <div className={`m-1 ${bg} flex justify-between`}>
        <div>
            {todo.title} 
        </div>
        <div>
            <span>{todo.status}</span> 
            <span>{format(todo.dueDate, 'yyyy/MM/dd')}</span>
        </div>
        
    </div>
}


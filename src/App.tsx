import { addDays, format } from "date-fns"
import { TodoItem } from "./components/Todo"

export type StatusType = "done" | "wip" | "pending"

export interface SubTask {
    id: number
    title: string
    status: StatusType
}

export interface Todo {
    id: number
    title: string
    status: StatusType
    subTasks: Array<SubTask>
    dueDate: Date
    memo: string
}

const todos : Array<Todo> = [
    {
        id: 1,
        memo: "hogehoge",
        status: "pending",
        dueDate: addDays(new Date(), 1),
        title: "hoge",
        subTasks: []
    },
    {
        id: 2,
        memo: "fugafuga",
        status: "wip",
        dueDate: addDays(new Date(), 0),
        title: "fuga",
        subTasks: []
    },
    {
        id: 3,
        memo: "fugafuga",
        status: "done",
        dueDate: addDays(new Date(), -1),
        title: "asdf",
        subTasks: []
    }
];


export const App = () => {
    return <>
        {
            todos.map(todo => <TodoItem key={todo.id} todo={todo} />)
        }
    </>
}



















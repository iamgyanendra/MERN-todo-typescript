import axios from "../API/api"
import myTodo from "../type";

const getAll=()=>{
    return axios.get<myTodo>("/todos");
};

const getSingle = (id:any)=>{
    return axios.get<myTodo>(`/todos/${id}`)
};

const create = (data:any)=>{
    return axios.post("/todos/new",data);
}
const update = (id:any, data:myTodo)=>{
    return axios.put<any>(`/todos/${id}`,data);
}

const remove = (id:any)=>{
    return axios.delete<any>(`/todos/${id}`)
}
const removeAll = ()=>{
    return axios.delete<any>(`/todos`)
}

const findByTitle = (title:string)=>{
    return axios.get<Array<myTodo>>(`/todos?title=${title}`);
}

const TodoService = {
    getAll,
    getSingle,
    create,
    update,
    remove,
    findByTitle,
    removeAll
};
export default TodoService;
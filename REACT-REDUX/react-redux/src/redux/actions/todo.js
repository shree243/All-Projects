import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./action.types"


// add todo action 
export const addTodo = (todo)=>({
    type:ADD_TODO,
    payload:todo
})

// delete Todo action
export const deleteTodo = (id)=>({
    type:DELETE_TODO,
    payload:id
})

// update Todo action 
export const updateTodo = (todo, id) => ({
type:UPDATE_TODO,
payload:{todo:todo, todoId:id}
})


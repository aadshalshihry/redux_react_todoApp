import { createStore } from "redux";
import * as actions from "../Actions/AddTodo";
import todosReducer from "../Reducers";
const initState = {
  todos: [
    {
      id: 0,
      task: "Use Redux",
      completed: false
    }
  ],
  currentTodoId: 1
}

let store = createStore(todosReducer, initState)
// store.dispatch(actions.incerId());
// store.dispatch(actions.addTodo("Task Two", store.getState().currentTodoId));
//
// store.dispatch(actions.incerId());
// store.dispatch(actions.addTodo("Task three", store.getState().currentTodoId));
//
// store.dispatch(actions.incerId());
// store.dispatch(actions.addTodo("Task four", store.getState().currentTodoId));
//
// console.log(store.getState());

export default store;

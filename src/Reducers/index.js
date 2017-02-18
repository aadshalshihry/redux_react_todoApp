import { combineReducers } from 'redux';
import todos from "./AddTodo";
import incermentId from "./IncermentId";

const todoApp = combineReducers({
  todos,
  currentTodoId: incermentId
});

export default todoApp


const todosReducer = (state = {}, action)  => {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([ action.todo ])
    case "TEGGLE_COMPLETED":
      return state.filter(todo => {
        if(todo.id !== action.id){
          return todo
        }
        todo.completed = !todo.completed
        return todo;
      })
    default:
      return state
  }
}

export default todosReducer;

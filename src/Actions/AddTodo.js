
export function addTodo(text, id){
  return {
    type: 'ADD_TODO',
    todo: {
      id: id,
      task: text,
      completed: false
    }
  }
}

export function incerId(){
  return {
    type: "INCER_ID"
  }
}

export function ToggelCompleted(id) {
  return {
    type: "TEGGLE_COMPLETED",
    id
  }
}

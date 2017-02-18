

const incermentId = (state = {}, action)  => {
  switch (action.type) {
    case 'INCER_ID':
      return state+1
    default:
      return state
  }
}

export default incermentId;

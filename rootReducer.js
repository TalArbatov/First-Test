const initialState = {
  personList: [],
}

const rootReducer = (state = initialState, action) => {
  const newState = {...state};
  switch(action.type) {
    case actions.ADD_PERSON:
      newState = {...state, personList: [...state.personList].concat(action.payload.person)};
      break;
     default:
      break;
  }
  return newState;
}

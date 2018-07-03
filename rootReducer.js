const initialState = {
  personList: [],
}

const rootReducer = (state = initialState, action) => {
  const newState = {...state};
  switch(action.type) {
    case actions.ADD_PERSON:
      newState = {...state, personList: [...state.personList].concat(action.payload.person)};
      break;
    case: actions.DELETE_PRSON:
      newState = {...state, personList: [...state.personList].filter(person => person.name !== action.payload.name)};        
      break;
     default:
      break;
  }
  return newState;
}

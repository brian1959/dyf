const initialState = {
    user: {}
  };
  
  const UPDATE_USER = "UPDATE_USER";
  
  export function updateUser(userObj) {
    return {
      type: UPDATE_USER,
      payload: userObj
    };
  }
  
  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case UPDATE_USER:
        return Object.assign({}, state, { user: action.payload });
      default:
        return state;
    }
  }
  
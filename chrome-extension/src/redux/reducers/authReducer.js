// src/redux/reducers/authReducer.js
const initialState = {
    accessToken: '',
    refreshToken: '',
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_TOKENS':
        return {
          ...state,
          accessToken: action.payload.accessToken,
          refreshToken: action.payload.refreshToken,
        };
      case 'CLEAR_TOKENS':
        return {
          ...state,
          accessToken: '',
          refreshToken: '',
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  
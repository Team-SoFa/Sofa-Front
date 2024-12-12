// src/redux/actions/authActions.js
export const setTokens = (accessToken, refreshToken) => ({
    type: 'SET_TOKENS',
    payload: { accessToken, refreshToken },
  });
  
  export const clearTokens = () => ({
    type: 'CLEAR_TOKENS',
  });
  
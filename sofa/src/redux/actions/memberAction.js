// redux/actions/memberActions.js
export const setMember = (email, name) => ({
    type: 'SET_MEMBER',
    payload: { email, name },
});

// export const clearMember = () => ({
//     type: 'CLEAR_TOKENS',
// });

// redux/reducers/memberReducer.js
const initialState = {
    email: '',
    name: '',
};

const setMember = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_MEMBER':
            return {
                ...state,
                email: action.payload.email,
                name: action.payload.name,
            };
        default:
            return state;
    }
};

export default setMember;

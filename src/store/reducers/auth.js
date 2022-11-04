const initialState = {
    Authorization: sessionStorage.getItem('token'),
    user: JSON.parse(sessionStorage.getItem('user'))
}

const Auth = (state = initialState, action) => {
    switch (action.type) {
        case 'AUTH':
            sessionStorage.setItem('token', `${action.payload.authorisation.type} ${action.payload.authorisation.token}`);
            sessionStorage.setItem('user', JSON.stringify(action.payload.user));

            return {
                ...state,
                Authorization: `${action.payload.authorisation.type} ${action.payload.authorisation.token}`,
                user: action.payload.user
            }

        default: return state;
    }
}

export default Auth;
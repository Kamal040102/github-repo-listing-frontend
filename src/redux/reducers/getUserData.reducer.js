const initialState = {
    data: {},
    loading: false,
    error: null
}

const getUserData = (state = initialState, action) => {
    switch (action.type) {
        case "GET_USER_DATA_INITIALIZE":
            return {
                ...state,
                loading: true
            }
        case "GET_USER_DATA_SUCCESS":
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case "GET_USER_DATA_FAIL":
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default getUserData;
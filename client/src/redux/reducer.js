import { TOGGLE_DAY, GET_YESTERDAY, GET_TODAY, GET_TOMORROW } from './action'


const initialState = {
    today: "",
    tomorrow: "",
    yesterday: "",
    displaying: ''
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_DAY:
            return {
                ...state,
                displaying: state[action.value]
            }
        case GET_TOMORROW: 
            return {
                ...state, 
                tomorrow: action.data
            }
        case GET_TODAY: 
            return {
                ...state, 
                today: action.data,
                displaying: action.data
                
            }
        case GET_YESTERDAY: 
            return {
                ...state, 
                yesterday: action.data
            }
        default:
            return state;
    }

}


export default reducer;
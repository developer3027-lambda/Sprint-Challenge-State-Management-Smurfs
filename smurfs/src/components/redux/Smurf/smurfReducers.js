import { GET_SMURF } from './smurfTypes';


const initailState = {
    name: '',
    age: 0,
    height: 0
}

const smurfReducer = (state = initailState, action) => {
    switch(action.type) {
        case GET_SMURF: return {
            ...state,
        }
        default: return state
    }
}

export default smurfReducer
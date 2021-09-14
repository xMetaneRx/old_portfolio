import { showWindow } from "../actions";

const windowReducer = (state = true, action) => {
    switch(action.type) {
        case 'SHOW_WINDOW':
            return action.payload;
        default:
            return state;
    }
}

export default windowReducer;
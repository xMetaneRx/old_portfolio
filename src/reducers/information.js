const informationReducer = (state = {data: [], msg: ''}, action) => {
    switch(action.type) {
        case "FETCH_DATA_REQUEST":
            return {...state, isLoading: true}
        case "FETCH_DATA_SUCCESS":
            return {...state, data: action.data, isLoading: false}
        case "FETCH_DATA_FAILURE":
            return {...state, error: action.msg, isLoading: false}
        default: 
            return state
    }
}

export default informationReducer;
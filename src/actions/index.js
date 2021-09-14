export const showWindow = show => {
    return {
        type: 'SHOW_WINDOW',
        payload: show,
    }
}

export const fetchData = (endpoint) => {
    return (dispatch) => {
        dispatch({type: 'FETCH_DATA_REQUEST'})
        return fetch(`https://portfolio-backend-x.herokuapp.com/${endpoint}`, {
            method: 'get',
        })
        .then(response => response.json())
        .then(json => dispatch({
            type: 'FETCH_DATA_SUCCESS', data: json
        }))
        .catch(err => dispatch({
            type: 'FETCH_DATA_FAILURE', msg: 'Unable to fetch data!'
        }))
    }
}
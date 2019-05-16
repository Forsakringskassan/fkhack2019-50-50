import fetch from 'cross-fetch'

export const REQUEST_ACCOUNT = 'REQUEST_ACCOUNT'
export const REQUEST_ACCOUNT_SUCCESS = 'REQUEST_ACCOUNT_SUCCESS'
export const REQUEST_ACCOUNT_ERROR = 'REQUEST_ACCOUNT_ERROR'

export function requestAccount(id) {
    return {
        type: REQUEST_ACCOUNT,
        id
    }
}

export function requestAccountSuccess(accounts) {
    return {
        type: REQUEST_ACCOUNT_SUCCESS,
        accounts
    }
}

export function requestAccountError(err) {
    return {
        type: REQUEST_ACCOUNT_ERROR,
        err
    }
}

export function fetchAccount(id) {
    return function (dispatch) {
        dispatch(requestAccount(id));

        const fetchUrl = 'api/account' + id ? '/' + id : ''
        return (
            fetch(fetchUrl)
                .then(
                    response => response.json(),
                    error => {
                        console.log("error fetching account");
                        dispatch(
                            requestAccountError({
                                msg: 'Error fetching account',
                                id
                            })
                        );
                    }
                )
                .then(json => dispatch(requestAccountSuccess(json)))
        );
    };
}
import fetch from 'cross-fetch'

export const REQUEST_CUSTOMER = 'REQUEST_CUSTOMER'
export const REQUEST_CUSTOMER_SUCCESS = 'REQUEST_CUSTOMER_SUCCESS'
export const REQUEST_CUSTOMER_ERROR = 'REQUEST_CUSTOMER_ERROR'
export const SELECT_CUSTOMER = 'SELECT_CUSTOMER'

export function selectCustomer(id) {
    return {
        type: SELECT_CUSTOMER,
        id
    }
}

export function requestCustomer(id) {
    return {
        type: REQUEST_CUSTOMER,
        id
    }
}

export function requestCustomerSuccess(customer) {
    return {
        type: REQUEST_CUSTOMER_SUCCESS,
        customer
    }
}

export function requestCustomerError(err) {
    return {
        type: REQUEST_CUSTOMER_ERROR,
        err
    }
}

export function fetchCustomer(id) {
    return function (dispatch) {
        dispatch(requestCustomer(id));

        const fetchUrl = 'http://35.228.187.212:8080/customerservice/customers/' + id
        return (
            fetch(fetchUrl)
                .then(
                    response => response.json(),
                    error => {
                        dispatch(
                            requestCustomerError({
                                msg: 'Error fetching customer',
                                id
                            })
                        );
                    }
                )
                .then(json => dispatch(requestCustomerSuccess(json)))
        );
    };
}
import fetch from 'cross-fetch'

export const REQUEST_PAYMENT = 'REQUEST_PAYMENT'
export const REQUEST_PAYMENT_SUCCESS = 'REQUEST_PAYMENT_SUCCESS'
export const REQUEST_PAYMENT_ERROR = 'REQUEST_PAYMENT_ERROR'

export function requestPayment(id) {
    return {
        type: REQUEST_PAYMENT,
        id
    }
}

export function requestPaymentSuccess(payments) {
    return {
        type: REQUEST_PAYMENT_SUCCESS,
        payments
    }
}

export function requestPaymentError(err) {
    return {
        type: REQUEST_PAYMENT_ERROR,
        err
    }
}

export function fetchPayment(customerId) {
    return function (dispatch) {
        dispatch(requestPayment(customerId));

        const fetchUrl = 'http://192.168.99.100:8080/payments/' + customerId
        return (
            fetch(fetchUrl)
                .then(
                    response => response.json(),
                    error => {
                        dispatch(
                            requestPaymentError({
                                msg: 'Error fetching payment',
                                customerId
                            })
                        );
                    }
                )
                .then(json => dispatch(requestPaymentSuccess(json)))
        );
    };
}
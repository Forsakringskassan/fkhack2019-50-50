export const PAYMENT_FORM_UPDATED = 'PAYMENT_FORM_UPDATED'
export const SAVE_PAYMENT = 'SAVE_PAYMENT'
export const SAVE_PAYMENT_SUCCESS = 'SAVE_PAYMENT_SUCCESS'
export const SAVE_PAYMENT_ERROR = 'SAVE_PAYMENT_ERROR'

export function updatePaymentForm(data) {
    return {
        type: PAYMENT_FORM_UPDATED,
        data
    }
}

export function savePayment(payment) {
    return {
        type: SAVE_PAYMENT,
        payment
    }
}

export function savePaymentSuccess(payment) {
    return {
        type: SAVE_PAYMENT_SUCCESS,
        payment
    }
}

export function savePaymentError(err) {
    return {
        type: SAVE_PAYMENT_ERROR,
        err
    }
}

export function postPayment(payment) {
    return function (dispatch) {
        dispatch(savePayment(payment))
        const customerId = payment.payment_to
        payment.payment_from = 'FK'
        payment.description = 'TFP'
        payment.date = payment.paymentDate
        const postUrl = 'http://35.228.149.52/payments/' + customerId
        return (
            fetch(postUrl, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payment)
            })
                .then(
                    response => response.json(),
                    error => {
                        dispatch(
                            savePaymentError({
                                msg: 'Error fetching payment',
                                customerId
                            })
                        );
                    }
                )
                .then(json => dispatch(savePaymentSuccess(json)))
        );
    }
}


import { accountEntityReducer } from './AccountEntityReducer'
import { customerEntityReducer } from './CustomerEntityReducer'
import { paymentEntityReducer } from './PaymentEntityReducer'
import { halReducer } from './HalReducer'
import { paymentFormReducer } from './PaymentFormReducer'

export function rootReducer(state, action) {
    return {
        accounts: accountEntityReducer(state.accounts, action),
        customers: customerEntityReducer(state.customers, action),
        payments: paymentEntityReducer(state.payments, action),
        hal: halReducer(state.hal, action),
        paymentForm: paymentFormReducer(state.paymentForm, action)
    }
}

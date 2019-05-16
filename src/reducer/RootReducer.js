import { accountEntityReducer } from './AccountEntityReducer'
import { customerEntityReducer } from './CustomerEntityReducer'
import { paymentEntityReducer } from './PaymentEntityReducer'
import { halReducer } from './HalReducer'

export function rootReducer(state, action) {
    return {
        accounts: accountEntityReducer(state.accounts, action),
        customers: customerEntityReducer(state.customers, action),
        payments: paymentEntityReducer(state.payments, action),
        hal: halReducer(state.hal, action)
    }
}

import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { CustomerContainer } from '../container/CustomerContainer'
import { CustomerListContainer } from '../container/CustomerListContainer'
import { fetchCustomer } from '../action/CustomerEntityAction'
import { connect } from 'react-redux'

export class CustomerRoute extends Component {

    render() {
        return (
            <CustomerContainer id={this.props.match.params.id}></CustomerContainer>
            // <div>
                
            //     <Route path={`${this.props.match.path}/:id`} component={CustomerContainer} />
                
            // </div>
        )
    }

}

// const mapStateToProps = (state) => {
//     return {
//         match: state.match
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onFetchCustomer: (id) => dispatch(fetchCustomer(id))
//     }
// }

//export const CustomerRoute = connect(mapStateToProps, mapDispatchToProps)(InternalCustomerRoute)
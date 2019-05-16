import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { PaymentContainer } from '../container/PaymentContainer'
import { PaymentListContainer } from '../container/PaymentListContainer'

export class PaymentRoute extends Component {

    render() {
        return (
            <div>
                <Route path={`${this.props.match.path}/:id`} component={PaymentContainer} />
                <Route
                    exact
                    path={this.props.match.path}
                    render={() => {
                        return (
                            <div>
                                <PaymentListContainer />
                            </div>
                        )
                    }
                    }
                />
            </div>
        )
    }
    
}
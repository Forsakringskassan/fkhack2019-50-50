import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { HalContainer } from '../container/HalContainer'

export class HalRoute extends Component {

    render() {
        return (
            <div>
                <Route
                    exact
                    path={this.props.match.path}
                    render={() => {
                        return (
                            <div>
                                <HalContainer />
                            </div>
                        )
                    }
                    }
                />
            </div>
        )
    }

}
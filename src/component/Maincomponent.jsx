import React, { Component } from 'react';
import Dashboard from './Dashboard';

class Maincomponent extends Component {
    render() {
        return (
            <div>
                <Dashboard data={this.props} />
            </div>
        );
    }
}

export default Maincomponent;
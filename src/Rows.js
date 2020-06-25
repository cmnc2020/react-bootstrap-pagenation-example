import React, { Component } from 'react';

class Rows extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <tr>
                <td>{this.props.data}</td>
            </tr>
        );
    }
}

export default Rows;
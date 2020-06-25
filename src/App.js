import React, { Component } from 'react';
import PagenationTable from './PagenationTable';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <h1>Pagenation Example</h1>
                <PagenationTable />
            </div>
        );
    }
}

export default App;
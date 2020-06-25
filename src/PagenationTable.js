import React, { Component } from 'react';
import Rows from './Rows';

class PagenationTable extends Component {
    constructor(props) {
        super(props);
        this.dataSet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
        this.offset = 3;
        this.state = {
            start: 0
        };
        this.handlePagenation = this.handlePagenation.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
        this.handleNext = this.handleNext.bind(this);
    }

    handlePagenation(pageNumber) {
        this.setState({ start: pageNumber * this.offset });
    }

    handlePrev() {
        if (this.state.start <= 0) {
            return;
        }
        this.setState({ start: this.state.start - this.offset });
    }

    handleNext() {
        if (this.state.start >= this.dataSet.length - 1) {
            return;
        }
        this.setState({ start: this.state.start + this.offset });
    }

    render() {


        const rows = [];

        for (let i = this.state.start; i < this.state.start + this.offset; i++) {
            rows.push(<Rows data={this.dataSet[i]} />)
        }

        return (
            <div>
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item"><a className="page-link" onClick={this.handlePrev} href="#">Previous</a></li>
                        <li className="page-item"><a className="page-link" onClick={() => this.handlePagenation(0)} href="#">1</a></li>
                        <li className="page-item"><a className="page-link" onClick={() => this.handlePagenation(1)} href="#">2</a></li>
                        <li className="page-item"><a className="page-link" onClick={() => this.handlePagenation(2)} href="#">3</a></li>
                        <li className="page-item"><a className="page-link" onClick={this.handleNext} href="#">Next</a></li>
                    </ul>
                </nav>
                <table>
                    {rows}
                </table>
            </div>
        );
    }
}

export default PagenationTable;
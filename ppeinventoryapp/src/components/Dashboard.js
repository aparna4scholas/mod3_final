import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom';

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = { dashboard: {}, isLoading: true };
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        fetch('/ppe_api/v1/dashboard')
            .then(response => response.json())
            .then(data => this.setState({ dashboard: data, isLoading: false }));
    }



    render() {
        const { dashboard, isLoading } = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        return (
            <div>
                <div className="card bg-success text-white h-100 hw-50">
                    <div className="card-body bg-success">
                        <h6> mask count</h6>
                        <h1>{dashboard.maskCount}</h1>
                    </div>
                </div>
                <div className="card bg-success text-white h-100 hw-50">
                    <div className="card-body bg-orange">
                        <h6> Gloves count</h6>
                        <h1>{dashboard.glovesCount}</h1>
                    </div>
                </div>
                <div className="card bg-success text-white h-100 ">
                    <div className="card-body bg-bg-navy hw-50">
                        <h6> Surgical Gown count</h6>
                        <h1>{dashboard.surgicalGownCount}</h1>
                    </div>
                </div>
            </div>
        );
    }
}
export default Dashboard;
import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom';

class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {dashboard: {}, isLoading: true};
  }

  componentDidMount() {
    this.setState({isLoading: true});

    fetch('/ppe_api/v1/dashboard')
      .then(response => response.json())
      .then(data => this.setState({dashboard: data, isLoading: false}));
  }

  

  render() {
    const {dashboard, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div>
       <table><tr> 
        <td>{dashboard.maskCount}</td>
        <td>{dashboard.glovesCount}</td>
        <td>{dashboard.surgicalGownCount}</td>
        </tr>
        </table>
      </div>
    );
  }
}
export default Dashboard;
import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom';

class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {PPECityData: [], isLoading: true};
    this.remove = this.remove.bind(this);
  }

  componentDidMount() {
    this.setState({isLoading: true});

    fetch('/ppe_api/v1/ppedata')
      .then(response => response.json())
      .then(data => this.setState({PPECityData: data, isLoading: false}));
  }

  async remove(id) {
    await fetch(`/ppe_api/v1/ppedata${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() => {
      let updatedData = [...this.state.PPECityData].filter(i => i.id !== id);
      this.setState({PPECityData: updatedData});
    });
  }

  render() {
    const {dashboard, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    const Citydata = PPECityData.map(dashboard => {
      return <tr key={dashboard.id}>
        <td style={{whiteSpace: 'nowrap'}}>{dashboard.firstName}</td>
        <td>{dashboard.lastName}</td>
        <td>{dashboard.email}</td>
        <td>
          <ButtonGroup>
            <Button size="sm" color="primary" tag={Link} to={"/employee/" + dashboard.id}>Edit</Button>
            <Button size="sm" color="danger" onClick={() => this.remove(dashboard.id)}>Delete</Button>
          </ButtonGroup>
        </td>
      </tr>
    });

    return (
      <div>
        <AppNavbar/>
        <Container fluid>
          
          <h3>All cities count</h3>
          <Table className="mt-4">
            <thead>
            <tr>
              <th width="20%">cityName</th>
              <th width="20%">MaskCount</th>
              <th width="20%"> GlovesCount</th>
              <th width="20%">surgicalGownCount</th>
              <th width="20%">totalCount</th>
            </tr>
            </thead>
            <tbody>
            {Dashboard}
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}

export default Dashboard;
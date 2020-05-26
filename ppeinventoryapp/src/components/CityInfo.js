import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom';

class CityInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dashboard: [], 
      isLoading: true,
      renderCityInfoEdit : false };
    this.remove = this.remove.bind(this);
  }

  componentDidMount() {
    this.setState({isLoading: true});

    fetch('/ppe_api/v1/ppedata')
      .then(response => response.json())
      .then(data => this.setState({dashboard: data, isLoading: false}));
  }

  async remove(cityName) {
    await fetch(`/ppe_api/v1/pperecords/${cityName}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() => {
      let updatedDashboard = [...this.state.dashboard].filter(i => i.cityName !== cityName);
      this.setState({dashboard: updatedDashboard});
    });
  }

  render() {
    const {dashboard, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    const CityInfo = dashboard.map(dashboard => {
      return <tr key={dashboard.uid}>
        <td style={{whiteSpace: 'nowrap'}}>{dashboard.cityName}</td>
        <td>{dashboard.maskCount}</td>
        <td>{dashboard.glovesCount}</td>
        <td>{dashboard.surgicalGownCount}</td>
        <td>{dashboard.maskCount+dashboard.glovesCount+dashboard.surgicalGownCount}</td>
        <td>
          <ButtonGroup>
            <Button size="sm" color="primary" tag={Link} to={"/CityInfoEdit/"+dashboard.cityName}>Edit</Button>
            <Button size="sm" color="danger" onClick={() => this.remove(dashboard.cityName)}>Delete</Button>
          </ButtonGroup>
        </td>
      </tr>
    });

    return (
      <div>
        
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
            {CityInfo}
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}

export default CityInfo;
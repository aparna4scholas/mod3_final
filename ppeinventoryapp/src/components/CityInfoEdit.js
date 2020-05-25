import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavBar';

class CityInfoEdit extends Component {

  emptyItem = {
    cityName: '',
    MaskCount: '',
    GlovesCount: '',
    surgicalGownCount: '',
    totalCount: ''

  };

  constructor(props) {
    super(props);
    this.state = {
      item: this.emptyItem
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    if (this.props.match.params.id !== 'new') {
      const group = await (await fetch(`/ppe_api/v1/pperecords/${this.props.match.params.id}`)).json();
      this.setState({item: group});
    }
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let item = {...this.state.item};
    item[name] = value;
    this.setState({item});
  }

  async handleSubmit(event) {
    event.preventDefault();
    const {item} = this.state;
   let url = (item.id) ? `/ppe_api/v1/pperecords/${item.id}` :
    '/ppe_api/v1/pperecords/';

    await fetch(url, {
      method: (item.id) ? 'PUT' : 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item),
    });
    this.props.history.push('/pperecords');
  }

  render() {
    const {item} = this.state;
    const title = <h2>{item.id ? 'Edit pperecords' : 'Add pperecords'}</h2>;

    return <div>
      <AppNavbar/>
      <Container>
        {title}
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="cityNamew">cityName </Label>
            <Input type="text" name="cityName" id="citytName" value={item.cityName || ''}
                   onChange={this.handleChange} autoComplete="citytName"/>
          </FormGroup>
          <FormGroup>
            <Label for="MaskCount">MaskCount</Label>
            <Input type="text" name="MaskCount" id="MaskCount" value={item.MaskCount || ''}
                   onChange={this.handleChange} autoComplete="MaskCount"/>
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="text" name="email" id="email" value={item.email || ''}
                   onChange={this.handleChange} autoComplete="email"/>
          </FormGroup>
        
          <FormGroup>
            <Button color="primary" type="submit">Save</Button>{' '}
            <Button color="secondary" tag={Link} to="/employees">Cancel</Button>
          </FormGroup>
         
        </Form>
      </Container>
    </div>
  }
}

export default withRouter(EmployeeEdit);
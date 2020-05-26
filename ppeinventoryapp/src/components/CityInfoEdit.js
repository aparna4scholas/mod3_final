import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';


class CityInfoEdit extends Component {

  emptyItem = {
    cityName: '',
    maskCount: '',
    glovesCount: '',
    surgicalGownCount: '',
    uid : ''
  };

  constructor(props) {
    super(props);
    this.state = {
      item: this.emptyItem,
      cities : []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    if (this.props.match.params.cityName !== 'new') {
      const group = await (await fetch(`/ppe_api/v1/pperecords/${this.props.match.params.cityName}`)).json();
      this.setState({item: group});
    }
    const citiesdata = await (await fetch('/ppe_api/v1/citynames')).json();
    this.setState({cities: citiesdata});
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
   let url = (item.uid) ? `/ppe_api/v1/pperecords/${item.cityName}` :
    '/ppe_api/v1/pperecords/';

    await fetch(url, {
      method: (item.uid) ? 'PUT' : 'POST',
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
    console.log('item.cityName ->'+item.cityName);
    const title = <h2>{item.uid ? 'Edit Record' : 'Add Record'}</h2>;
    const {cities} = this.state;
    let options = cities.map((data) => 
        <option key={data.cityName}>{data.cityName}</option>
    );
    const disableInput = (item.uid) ? true : false;
    return <div>
     
      <Container>
        {title}
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="cityName">cityName </Label>
            <Input type="text" name="cityName" id="citytName" value={item.cityName || ''}
                   onChange={this.handleChange} autoComplete="citytName" disabled={disableInput}/>
             <select name="cityName" id="citytName" onChange={this.handleChange} hidden={disableInput}>
                    {options}
             </select>
          </FormGroup>
          <FormGroup>
            <Label for="maskCount">MaskCount</Label>
            <Input type="text" name="maskCount" id="maskCount" value={item.maskCount || ''}
                   onChange={this.handleChange} autoComplete="maskCount"/>
          </FormGroup>
          <FormGroup>
            <Label for="glovesCount">GlovesCount</Label>
            <Input type="text" name="glovesCount" id="glovesCount" value={item.glovesCount || ''}
                   onChange={this.handleChange} autoComplete="glovesCount"/>
          </FormGroup>
          <FormGroup>
            <Label for="surgicalGownCount">surgicalGownCount</Label>
            <Input type="text" name="surgicalGownCount" id="surgicalGownCount" value={item.surgicalGownCount || ''}
                   onChange={this.handleChange} autoComplete="surgicalGownCount"/>
          </FormGroup>
        
          <FormGroup>
            <Button color="primary" type="submit">Save</Button>{' '}
            <Button color="secondary" tag={Link} to="/CityInfo">Cancel</Button>
          </FormGroup>
         
        </Form>
      </Container>
    </div>
  }
}
export default withRouter(CityInfoEdit);
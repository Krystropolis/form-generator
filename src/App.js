import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import TextField from './TextField';
import EmailField from './EmailField';
import DateField from './DateField';
import CheckboxInput from './CheckboxInput';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      fields: [],
      date: null
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const data = require('./sample-data');
    this.setState({ data: data });
  }

  handleChange(value) {
    this.setState({date: new Date(value)});
  }

  generateForm(data) {
    const form = data.map(field => {
      if (field.tag === "input") {
        switch (field.type) {
          case 'text':
            return <TextField key={field.name} field={field} />;
          case 'email':
            return <EmailField key={field.name} field={field} />;
          case 'date':
            return <DateField key={field.name} field={field} onChange={this.handleChange} />;
          case 'checkbox':
            return <CheckboxInput key={field.name} field={field} date={this.state.date}/>;
          default:
            return null;
        }
      } else {
        return null;
      }
    });
    return form;
  }

  /**
   *  This is where custom validation could occur prior to sending the form data along
   *  It would be good to create several validation functions to check each input type
   * */ 
  validateFormOnSubmit = (event) => {
    event.preventDefault();
    let userData = {};
    this.state.data.forEach(field => {
      userData[field.name] = event.target[field.name] ? event.target[field.name].value : "";
    });    
    // temporary: for viewing submitted data in dev tools
    console.log(JSON.stringify(userData));
  }

  render() {
    let form = null;
    if (this.state.data) {
      form = this.generateForm(this.state.data);
    }
    
    return (
      <div className="App container">
        <div className="App-header">
          <h2><img src={logo} className="App-logo" alt="logo" /> Form Generator</h2>
          <small>By: Krystal Elliott</small>
        </div>
        <div className="App-intro">
          {form &&
            <form id="user-info" action="#" onSubmit={this.validateFormOnSubmit}>
              {form}
              <button type="submit" className="btn btn-primary btn-block">
                Submit
              </button>
              <small>* required field</small>
            </form>
          }
        </div>
      </div>
    );
  }
}

export default App;
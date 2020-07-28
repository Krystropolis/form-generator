import React, { Component } from 'react';
import logo from './logo.png';
import oops from './data-missing.png';
import './App.css';
import TextField from './TextField';
import EmailField from './EmailField';
import DateField from './DateField';
import CheckboxInput from './CheckboxInput';

/**
 * Entry to app. Holds all components of the form.
 *
 * @class App
 * @extends {Component}
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      fields: [],
      date: null,
      warning: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  /**
   * Checks for sample data from which form will be generated.
   *
   * @memberof App
   */
  componentDidMount() {
    const data = require('./sample-data');
    if (Array.isArray(data)) {
      this.setState({ data: data });
    } else {
      this.setState({ warning: true });
    }
  }

  handleChange(value) {
    this.setState({ date: new Date(value) });
  }

  /**
   * Uses sample data to create form components.
   *
   * @param {*} data
   * @returns form - all input components 
   * @memberof App
   */
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
            return <CheckboxInput key={field.name} field={field} date={this.state.date} />;
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
   * This is where custom validation could occur prior to sending the form data along.
   * It would be good to create several validation functions to check each input type.
   *
   * @memberof App
   */
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
          {this.state.warning &&
            <div>
              <div className="alert alert-warning" role="alert">
                Error: Sample data missing/incorrect.<br />
                Please call 1-800-Add-Data for assistance.
              </div>
              <img src={oops} alt="error" className="error-image img-fluid" />
            </div>
          }
          {!this.state.warning && form &&
            <form id="user-info" action="#" onSubmit={this.validateFormOnSubmit}>
              {form}
              <button type="submit" className="btn btn-primary btn-block" id="user-info-btn">
                Submit
              </button>
              <small>* required field</small>
            </form>
          }
        </div>
      </div >
    );
  }
}

export default App;
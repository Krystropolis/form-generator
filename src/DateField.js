import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Input field for sample data type of 'date'.
 *
 * @export
 * @class DateField
 * @extends {Component}
 * @property {string} id
 * @property {object} field
 * @property {function} onChange
 */
export default class DateField extends Component {
  static propTypes = {
    id: PropTypes.string,
    field: PropTypes.object,
    onChange: PropTypes.func
  };

  /**
   * Sends date value to parent for processing
   * We're determining whether the 'parental consent' checkbox should be rendered
   *
   * @memberof DateField
   */
  handleDateChange = (event) => {
    let value = event.target.value;
    this.props.onChange(value);
  }

  render() {
    return (
      <div className="form-group date-field">
        <label htmlFor={this.props.field.name}>{this.props.field.human_label}</label>
        <input type="date" 
        className="form-control"
        onChange={this.handleDateChange}
        aria-describedby={`${this.props.field.human_label} input field`}
        name={this.props.field.name}
        id={this.props.field.name}
        min="1900-01-01" 
        max="2020-12-31"></input>
      </div>
    );
  }
}
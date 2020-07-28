import React, { Component } from 'react';
import PropTypes from 'prop-types';


/**
 * Input field for sample data type of 'email'.
 *
 * @export
 * @class EmailField
 * @extends {Component}
 * @property {string} id Field name.
 * @property {object} field Object containing sample data for rendering.
 */
export default class EmailInput extends Component {
  static propTypes = {
    id: PropTypes.string,
    field: PropTypes.object,
  };

  render() {
    return (
      <div className="form-group email-field">
        <label htmlFor={this.props.field.name}>
          {this.props.field.human_label}
          {this.props.field.required && <span>*</span>}
        </label>
        <input type="email"
          className="form-control"
          aria-describedby={`${this.props.field.human_label} input field`}
          name={this.props.field.name}
          id={this.props.field.name}
          placeholder="example@gmail.com"
          required={this.props.field.required}></input>
      </div>
    );
  }
}
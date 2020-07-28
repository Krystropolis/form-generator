import React, { Component } from 'react';
import PropTypes from 'prop-types';


/**
 * Input field for sample data type of 'checkbox'.
 * 
 * @export
 * @class CheckboxInput
 * @extends {Component}
 * @property {string} id
 * @property {object} field
 * @property {Date} date
 */
export default class CheckboxInput extends Component {
    static propTypes = {
        id: PropTypes.string,
        field: PropTypes.object,
        date: PropTypes.instanceOf(Date)
    };

    render() {
        if (this.props.date && this.props.field.conditional.show_if(this.props.date)) {
            return (
                <div className="form-group form-check checkbox-input">
                    <input type="checkbox"
                        className={`form-check-input ${this.props.field.conditional.name}`}
                        aria-describedby={`${this.props.field.human_label} checkbox`}
                        value={true}
                        id={this.props.field.name}
                        name={this.props.field.name}
                        required></input>
                    <label className="form-check-label" htmlFor={this.props.field.name}>{this.props.field.human_label}</label>
                </div>
            );
        } else {
            return null;
        }
    }
}
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Input fields for sample data type of 'text'.
 * Includes input types text and tel.
 *
 * @export
 * @class TextField
 * @extends {Component}
 * @property {string} id
 * @property {object} field
 */
export default class TextField extends Component {
    static propTypes = {
        id: PropTypes.string,
        field: PropTypes.object
    };
    
    render() {
        let component = null;
        if (this.props.field.name === 'phone_number') {
            component = (
                <input type="tel"
                    className="form-control" 
                    aria-describedby={`${this.props.field.human_label} input field`}
                    name={this.props.field.name}
                    id={this.props.field.name}
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    placeholder="123-456-7890"
                    title="123-456-7890"></input>
            );
        } else {
            component = (
                <input type="text"
                    className="form-control"
                    aria-describedby={`${this.props.field.human_label} input field`}
                    name={this.props.field.name}
                    id={this.props.field.name}></input>
            );
        }
        return (
            <div className="form-group text-field">
                <label htmlFor={this.props.field.name}>{this.props.field.human_label}</label>
                {component}
            </div>
        );
    }
}
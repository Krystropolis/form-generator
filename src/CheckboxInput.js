import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CheckboxInput extends Component {
    static propTypes = {
        id: PropTypes.string,
        field: PropTypes.object,
        renderField: PropTypes.bool,
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
                        name={this.props.field.name}></input>
                    <label className="form-check-label" htmlFor={this.props.field.name}>{this.props.field.human_label}</label>
                </div>
            );
        } else {
            return null;
        }
    }
}
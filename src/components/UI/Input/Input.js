import React from 'react';
import classes from './Input.module.css';
import { forOfStatement } from '@babel/types';

const input = (props) => {
    let inputElement = null;
    const inputClasses = [classes.Input]

    if(props.invalid && props.shouldValidate && props.touched){
        inputClasses.push(classes.Invalid);
    }

    switch (props.elementType) {
        case ('input'):
            inputElement = <input className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed} />;
            break;
        case ('textarea'):
            inputElement = <textarea className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed} />;
            break;
        case ('select'):
            inputElement =
                (<select
                    onChange={props.changed}
                    className={classes.InputElement}
                    value={props.value} >
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>);
            break;
        default:
            inputElement = <input className={classes.InputElement} {...props.elementConfig} value={props.value} onChange={props.changed} />;
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label} htmlFor="">{props.label}</label>
            {inputElement}
        </div>
    );
}

export default input;

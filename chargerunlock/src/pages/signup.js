import React from 'react';
import { useForm } from 'react-hook-form';

const formStyle = {
    margin: 'auto',
    padding: '10px',
    border: '1px solid #c9c9c9',
    borderRadius: '5px',
    background: '#ffffff',
    width: '220px',
    display: 'block'
};

const submitStyle = {
    margin: '10px 0 0 0',
    padding: '7px 10px',
    border: '1px solid #efffff',
    borderRadius: '3px',
    background: '#3085d6',
    width: '100%', 
    fontSize: '15px',
    color: 'white',
    display: 'block'
};

const inputStyle = {
    margin: '5px 0 10px 0',
    padding: '5px', 
    border: '1px solid #bfbfbf',
    borderRadius: '3px',
    boxSizing: 'border-box',
    width: '100%'
};

function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);

    return (

        <form style={formStyle} onSubmit={handleSubmit(onSubmit)}>
           <h1>Sign up and get started</h1>
            
            <br />
            <p>First name:</p>
            <input style={inputStyle}{...register('firstName', { required: true })} />
            {errors.lastName && <p>First name is required.</p>}
            <br />
            <p>Last name:</p>
            <input style={inputStyle}{...register('lastName', { required: true })} />
            {errors.lastName && <p>Last name is required.</p>}
            <br />
            <p>Email:</p>
            <input style={inputStyle}{...register('Email')} /> {/* register an input */}
            <br />
            <p>Password:</p>
            <input style={inputStyle}{...register('password')} /> {/* register an input */}
            <p>Reenter Password:</p>
            <input style={inputStyle}{...register('password')} /> {/* register an input */}
            <button style={submitStyle} type="submit">Submit</button>
           
        </form>
    );
}
export default Signup;



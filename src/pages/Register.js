import React from 'react'
import { connect } from 'react-redux'
import {register} from '../store/actions/authActions'

class Register extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    }

    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler = event => {
        event.preventDefault()
        this.props.register(this.state)
    }

    render() {
        return (
            <div className='row'>
                <div className="col-md-6 offset-md-3">
                    <h3>Create a New Account</h3>
                    <form onSubmit={this.submitHandler}>
                        <input
                            type="text"
                            name='firstName'
                            placeholder='First Name'
                            className='form-control'
                            value={this.state.firstName}
                            onChange={this.changeHandler}
                        />
                        <input
                            type="text"
                            name='lastName'
                            className='form-control'
                            placeholder='Last Name'
                            value={this.state.lastName}
                            onChange={this.changeHandler}
                        />
                        <input
                            type="email"
                            name='email'
                            className='form-control'
                            placeholder='Email'
                            value={this.state.email}
                            onChange={this.changeHandler}
                        />
                        <input
                            type="password"
                            name='password'
                            className='form-control'
                            placeholder='Password'
                            value={this.state.password}
                            onChange={this.changeHandler}
                        />
                        <button className='btn btn-primary'>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default connect(null, {register})(Register)
import React from 'react'
import { connect } from 'react-redux'
import { login } from '../store/actions/authActions'
import firebase from '../firebase'

class Login extends React.Component {
    state = {
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
        this.props.login(this.state)
    }

    render() {
        console.log(firebase.auth().currentUser)
        return (
            <div className='row'>
                <div className="col-md-6 offset-md-3">
                    <h3>Login to Your Account</h3>
                    <form onSubmit={this.submitHandler}>
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

export default connect(null, {login})(Login)
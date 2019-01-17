import React from 'react'
import { connect } from 'react-redux'
import {logout} from '../store/actions/authActions'

class Home extends React.Component {

    render() {
        console.log(this.props.auth)
        return (
            <React.Fragment>
            <h1>Hello, {this.props.auth ? this.props.auth.userId : ''}</h1>
            <button onClick={() => this.props.logout()}> Logout </button>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, {logout})(Home)
import React from 'react'
import { connect } from 'react-redux'
import { createGiveaway } from '../store/actions/giveawayActions'

class CreateGiveAway extends React.Component {
    state = {
        title: '',
        description: '',
        prize: '',
        totalPrize: 0,
        error: ''
    }

    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler = event => {
        event.preventDefault()
        let { title, description, prize, totalPrize } = this.state
        let {auth} = this.props
        if (auth.isAuthenticated) {
            this.props.createGiveaway({
                title,
                description,
                prize,
                totalPrize: parseInt(totalPrize),
                author: auth.userId
            })
            this.setState({
                error: ''
            })
        } else {
            this.setState({
                error: 'You Must be Login to Create a Giveaway'
            })
        }
    }

    render() {
        let {title, description, prize, totalPrize, error} = this.state
        return (
            <div className="row">
                <div className="col-md-8 mx-auto">
                    <h1> Create a New Giveaway </h1>
                    <form onSubmit={this.submitHandler}>
                        <input
                            type="text"
                            className='form-control'
                            name='title'
                            value={title}
                            placeholder='Enter a Title'
                            onChange={this.changeHandler}
                        />
                        <textarea
                            className='form-control'
                            name='description'
                            value={description}
                            placeholder='Enter Your Description'
                            onChange={this.changeHandler}
                        />
                        <input
                            type="text"
                            className='form-control'
                            name='prize'
                            value={prize}
                            placeholder='Enter a Prize'
                            onChange={this.changeHandler}
                        />
                        <input
                            type="number"
                            className='form-control'
                            name='totalPrize'
                            value={totalPrize}
                            placeholder='Enter Total Prize'
                            onChange={this.changeHandler}
                        />
                        <button className='btn btn-primary'> Create </button>
                    </form>
                    {error && <div className="alert alert-danger my-4">
                        {error}
                    </div>}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, {createGiveaway})(CreateGiveAway)
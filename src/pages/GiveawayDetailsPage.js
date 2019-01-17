import React from 'react'
import { connect } from 'react-redux'
import firebase from '../firebase'
import {entryParticipant} from '../store/actions/giveawayActions'

class GiveawayDetailsPage extends React.Component {

    state = {
        name: '',
        email: '',
        giveaway: {}
    }

    componentDidMount() {
        let { giveawayId } = this.props.match.params
        const db = firebase.firestore()
        db.collection('giveaways').doc(giveawayId).get()
            .then(doc => {
                this.setState({
                    giveaway: doc.data()
                })
            })
            .catch(error => console.log(error))
    }

    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler = event => {
        event.preventDefault()
        let { participants } = this.state.giveaway
        if (!participants) {
            participants = []
        }
        participants.push({ name: this.state.name, email: this.state.email })
        this.props.entryParticipant(participants, this.props.match.params.giveawayId)
    }

    render() {
        let { title, description, prize, totalPrize } = this.state.giveaway
        let { name, email } = this.state
    
        return (
            <div className='row'>
                <div className="col-md-8 mx-auto">
                    <div className="card">
                        <div className="card-body">
                            <h3> Title: {title}</h3>
                            <p> Description: {description}</p>
                            <h4>Prize: {prize} <span> Total Prize: {totalPrize} </span> </h4>
                            
                            <h2 className='my-5'> Submit Your Entry </h2>
                            <form onSubmit={this.submitHandler}>
                                <input
                                    type="text"
                                    className='form-control'
                                    name='name'
                                    placeholder='Enter Your Name'
                                    value={name}
                                    onChange={this.changeHandler}
                                />
                                <input
                                    type="email"
                                    className='form-control'
                                    name='email'
                                    placeholder='Enter Your Email'
                                    value={email}
                                    onChange={this.changeHandler}
                                />
                                <button className='btn btn-primary'>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, {entryParticipant})(GiveawayDetailsPage)
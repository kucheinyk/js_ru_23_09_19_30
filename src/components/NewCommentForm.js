import React, { Component, PropTypes } from 'react'
import { addComment } from '../AC/comments'
import { connect } from 'react-redux'

class NewCommentForm extends Component {
    static propTypes = {
        articleId: PropTypes.string.isRequired
    };

    state = {
        text: '',
        user: ''
    }

    handleChange = field => ev => this.setState({
        [field]: ev.target.value
    })

    handleSubmit = ev => {
        ev.preventDefault()
        const { articleId, addComment } = this.props
        const { user, text } = this.state

        addComment({articleId, user, text})

        this.setState({
            user: '',
            text: ''
        })
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                comment: <input type="text" value={this.state.text} onChange = {this.handleChange('text')}/>
                comment: <input type="text" value={this.state.user} onChange = {this.handleChange('user')}/>
                <input type = "submit" disabled={this.state.user=='' || this.state.text==''}/>
            </form>
        )
    }
}

export default connect(null, {addComment})(NewCommentForm)
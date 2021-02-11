import { React, Component } from 'react'
import { connect } from 'react-redux'
import { addComment } from '../store/action/commentActions.js'
import { utilService } from '../service/utilService.js'
import { editPost } from '../store/action/postActions.js'


class _AddComment extends Component {

    state = {
        comment: {
            id: utilService.makeId(),
            txt: '',
            createdAt: Date.now(),
            byUser: this.props.loggedinUser
        }
    }


    onSaveComment = async (ev) => {
        ev.preventDefault()
        const { post } = this.props
        const postCopy = { ...post } // might change to const postCopy = JSON.parse(JSON.stringify(post))
        const savedComment = this.state.comment
        if (!savedComment.txt) return alert('Can not post empty comment')
        postCopy.comments.unshift(savedComment)
        this.props.editPost(postCopy)
        this.setState({ comment: { txt: '' } })
    }


    onInputChange = (ev) => {
        const comment = { ...this.state.comment }
        comment.txt = ev.target.value
        this.setState({
            comment
        })
    }



    render() {
        return (
            <section className="comment-area">
                <form onSubmit={this.onSaveComment} className="form-container flex space-between">
                    <div className="input-container">
                        <input type="txt" placeholder="Add a comment..." value={this.state.comment.txt} name="txt" className="add-comment-textarea" onChange={this.onInputChange} autoComplete="off" />
                    </div>
                    <button className="add-comment-btn">Post</button >
                </form>
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        comments: state.postModule.comments,
        posts: state.postModule.posts,
        loggedinUser: state.postModule.loggedinUser

    }
}

const mapDispatchToProps = {
    addComment,
    editPost
}

export const AddComment = connect(mapStateToProps, mapDispatchToProps)(_AddComment)



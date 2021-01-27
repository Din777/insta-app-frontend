import { React, Component } from 'react'
import { connect } from 'react-redux'
import { addComment } from '../store/action/commentActions.js'

import Avatar from '@material-ui/core/Avatar';

class _AddComment extends Component {

    state = {
        comment: {
            txt: null,
            user: {
                "_id": "sadad748",
                "username": "abraham_lincoln",
                "imgUrl": "https://www.goodesign.co.il/wp-content/uploads/2017/03/HIPSTORY-Shimoni-Lincoln.jpg"
            },
            createdAt: Date.now()
        }
    }


    onSaveComment = async ev => {
        ev.preventDefault()
        const savedComment = this.state.comment
        if (!this.state.comment.txt) return alert('Can not upload empty comment')
        addComment(savedComment)
        this.setState({ savedComment: { txt: '' } })
    }

    onInputChange = (ev) => {
        const comment = { ...this.state.comment };
        comment.txt = ev.target.value;
        console.log(comment.txt);
        this.setState({
            comment: comment
        });
    };



    render() {
        return (
            <section className="comment-area">
                <form onSubmit={this.onSaveComment}>
                    <input type="txt" placeholder="Add a comment..." name="comment" className="add-comment-textarea" onChange={this.onInputChange} />
                    <button className="add-comment-btn">Post</button >
                </form>

            </section>
        )


    }
}
const mapStateToProps = state => {
    return {
        comments: state.postModule.comments
    }
}

const mapDispatchToProps = {
   
}

export const AddComment = connect(mapStateToProps, mapDispatchToProps)(_AddComment)



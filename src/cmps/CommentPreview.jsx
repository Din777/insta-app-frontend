import React from 'react';
import { utilService } from '../service/utilService.js';


export function CommentPreview({ comment, post, loggedinUser, onEditPost }) {

    function onRemoveComment() {
        if (comment.byUser._id !== loggedinUser._id) return
        const currCommentId = comment.id
        const postCopy = { ...post } // might change to JSON-parse+stringify
        postCopy.comments = postCopy.comments.filter(comment => comment.id !== currCommentId)
        onEditPost(postCopy)
    }

    return (
        <section className="comment-container">
            <div className="flex space-between">
                <div>
                    <span className="comm-by-user">{comment.byUser.username}</span>
                    <span className="comm-text">{comment.txt}</span>
                </div>
                {(comment.byUser._id === loggedinUser._id) &&
                    <svg className="delete-comment-btn" onClick={onRemoveComment} xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 512 512"><path d="M512 28.308L483.692 0 256 227.692 28.308 0 0 28.308 227.692 256 0 483.692 28.308 512 256 284.308 483.692 512 512 483.692 284.308 256z"></path></svg>}
            </div>
            <span className="comm-create-date">{utilService.timeDifference(Date.now(), comment.createdAt)}</span>
        </section>
    )
}









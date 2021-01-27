import { postService } from "../../service/postService.js"

export function loadComments(filterBy) {
    return (dispatch) => {
        postService.query(filterBy)
            .then(comments => { dispatch({ type: 'SET_COMMENTS', comments }) })
    }
}

export function removeComment(commentId) {
    console.log('actions', commentId);
    return (dispatch) => {
        postService.removeComment(commentId).then(() => { dispatch({ type: 'REMOVE_COMMENT', commentId }) })
    }
}

export function editComment(comment) {
    console.log("adding comment action ", comment);
    return (dispatch) => {
        console.log("adding comment action ", comment);
        postService.editComment(comment)
            .then(() => { dispatch({ type: 'EDIT_COMMENT', comment }) })
            .catch(err => {
                alert('OOPs, try again');
                console.log('ERR:', err);
            })
    }
}
export function addComment(comment) {
    console.log(comment, 'action-add comment');
    return (dispatch) => {
        postService.savePost().then((comment) => { dispatch({ type: 'ADD_POST', comment: comment }) })
    }
}


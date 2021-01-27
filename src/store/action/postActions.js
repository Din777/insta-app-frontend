import { postService } from "../../service/postService.js"


export function loadPosts(filterBy) {
    return (dispatch) => {
        console.log('filterBy', filterBy);
        postService.query(filterBy).then(posts => { dispatch({ type: 'SET_POSTS', posts: posts }) })
        
    }
}

export function removePost(postId) {
    return (dispatch) => {
        console.log('postId', postId);
        postService.remove(postId).then(() => { dispatch({ type: 'REMOVE_POST', postId }) })
    }
}

export function editPost(post) {
  console.log('post!!!', post)
  return (dispatch) => {
    postService.savePost(post)
      .then(() => { dispatch({ type: 'EDIT_POST', post }) })
      .catch(err => {
        console.log('ERR:', err);
      })
  }
}

export function addPost(post) {
  return async dispatch => {
    try {
      const addedPost = await postService.savePost(post)
      dispatch({ type: 'ADD_POST', post: addedPost })
    } catch (err) {
      console.log('PostActions: err in savePost', err)
    }
  }
}



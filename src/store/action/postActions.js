import { postService } from "../../service/postService.js"


export function loadPosts(filterBy) {
  return (dispatch) => {
    // console.log('filterBy', filterBy);
    postService.query(filterBy).then(posts => { dispatch({ type: 'SET_POSTS', posts: posts }) })

  }
}

export function removePost(postToRemove, loggedinUser) {
  // console.log('postAction- removePost', postToRemove);
  if (postToRemove.userId !== loggedinUser._id) {
    console.log('it is not your post!');
    return
  }
  else {
    const postId = postToRemove.postId
    return (dispatch) => {
      postService.remove(postId).then(() => { dispatch({ type: 'REMOVE_POST', postId }) })
    }
  }
}

export function editPost(post) {
  // console.log('enter edit post-before backend,post:', post)
  return (dispatch) => {
    return postService.savePost(post)
      .then((editedPost) => {
        // console.log('enter edit post-after backend')
        const action = {
          type: 'EDIT_POST',
          post: editedPost
        }
        dispatch(action)
      })
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



import { likeService } from "../../service/likeService.js"

export function toggleLike(like) {

    return (dispatch) => {
        console.log('new like:', like);
        likeService.saveLike(like).then((savedLike) => { dispatch({ type: 'ADD_LIKE', like: savedLike }) })
    }
}

// export function getById(likeId) {

//     return likeService.getById(likeId)
// }
// export function getById(likeId) {
//     return likeService.getById(likeId)
// }
// export function setFilter(filterBy) {
//     return (dispatch) => dispatch({ type: 'FILTER', filterBy })
// }

export function removeLike(likeId) {
    return (dispatch) => {
        console.log(dispatch);
        likeService.remove(likeId).then(() => { dispatch({ type: 'REMOVE_POST', likeId: likeId }) })
    }
}
// export function removeLike(likeId) {
//     return (dispatch) => {
//         return likeService.remove(likeId)
//         .then(like => {
//             const action = {
//                 type: 'REMOVE_POST',
//                 likeId
//             }
//             dispatch(action)
//         })
//     }
// }

export function editLike(like) {
    return (dispatch) => {
        likeService.saveLike(like)
            .then(() => { dispatch({ type: 'EDIT_POST', like: like }) })
            .catch(err => {
                alert('OOPs, try again');
                console.log('ERR:', err);
            })
    }
}

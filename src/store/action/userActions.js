import { userService } from "../../services/userService"

export function loadUsers(filterBy) {
    return (dispatch) => {
        userService.query(filterBy).then(users => { dispatch({ type: 'SET_TOYS', users }) })
    }
}

// export function getById(userId) {
//     return userService.getById(userId)
// }
// export function getById(userId) {
//     return userService.getById(userId)
// }
// export function setFilter(filterBy) {
//     return (dispatch) => dispatch({ type: 'FILTER', filterBy })
// }

export function removeUser(userId) {
    
    return (dispatch) => {
        userService.removeUser(userId).then(() => { dispatch({ type: 'REMOVE_TOY', userId }) })
    }
}

export function editUser(user) {
    return (dispatch) => {
        userService.editUser(user).then(() => { dispatch({ type: 'EDIT_TOY', user }) })
    }
}
export function addUser(user) {
    
    return (dispatch) => {
        userService.addUser(user).then((savedUser) => { dispatch({ type: 'ADD_TOY', user: savedUser }) })
    }
}
// export function editUser(user) {
//     console.log('editing', user);
//     return (dispatch) => dispatch({ type: 'EDIT_TOY', user: user })
// }

// export function checkUser(user) {
//     user = { ...user }
//     if (user.type === "Active") user.type = "Done"
//     else user.type = "Active"
//     return (dispatch) => dispatch({ type: 'EDIT_TOY', user: user })
// }


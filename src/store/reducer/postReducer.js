const posts = []
let localLoggedinUser = {
    "_id": "sadad748",
    "username": "abraham_lincoln",
    "imgUrl": "https://www.goodesign.co.il/wp-content/uploads/2017/03/HIPSTORY-Shimoni-Lincoln.jpg"
}

const initialState = {
    posts: posts,
    filterBy: { name: '', type: '' },
    loggedinUser: localLoggedinUser
}
export function postReducer(state = initialState, action) {
    // console.log('postReducer- action:', action);
    // console.log('postReducer- state.posts:',state.posts);
    switch (action.type) {
        case 'SET_POSTS':
            return { ...state, posts: action.posts }
        case 'EDIT_POST':
            // console.log('enter EDIT_POST');
            return {
                ...state,
                posts: state.posts.map(post =>
                    post._id === action.post._id ? action.post : post
                )
            }
        case 'ADD_POST':
            state = { ...state, posts: [...state.posts, action.post] }
            return state
        case 'FILTER':
            const regex = new RegExp(action.filterBy.text, 'i')
            if (action.filterBy.type === "All" && action.filterBy.text === "") {
                state = { ...state, posts: posts, filterBy: action.filterBy }
                return state
            }
            else {
                state = {
                    ...state, posts: posts.filter(post => ((regex.test(post.name)
                        && post.inStock === action.filterBy.type
                        && post.type === action.filterBy.type

                    ))), filterBy: action.filterBy
                }
                return state
            }
        case 'REMOVE_POST':
            state = { ...state, posts: state.posts.filter(post => post._id !== action.postId) }
            return state
        default:
            return state
    }
}


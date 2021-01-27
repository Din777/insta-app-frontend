import { StorageService } from './storageService.js';
import { utilService } from './utilService.js';
const fs = require('fs')
var gPosts = require('../data/post.json')


export const likeService = {
    // query,
    // getById,
    // saveLike,
    // remove
}


// function query() {
//     var posts = StorageService.load('posts')

//     if (!posts) {
//         StorageService.save('posts', gPosts)
//         return Promise.resolve(gPosts)
//     }
//     else return Promise.resolve(posts)
// }

// function getById(postId) {
//     var gPosts = StorageService.load('posts')
//     const post = gPosts.find(post => post._id === postId)
//     if (post) return Promise.resolve(post)
//     else return Promise.reject('No post')
// }

// function remove(postId) {
//     var posts = gPosts
//     const idx = posts.findIndex(post => post._id === postId)

//     if (idx >= 0) {
//         posts.splice(idx, 1)
//         StorageService.save('posts', posts)
//         return Promise.resolve()
//     } else return Promise.reject('No post')
// }

// function saveLike(like) {
//     var gPosts = StorageService.load('posts')

//     if (post._id) {
//         const idx = gPosts.findIndex(currPost => currPost._id === post._id)
//         gPosts[idx] = post;
//     } else {
//         post._id = utilService.makeId()
//         gPosts.unshift(post)
//     }
//     StorageService.save('posts', gPosts)
//     // _saveEventisToFile(gPosts)
//     return Promise.resolve(post)
// }

function _savePostsToFile(gPosts) {
    fs.writeFileSync('data/post.json', JSON.stringify(gPosts, null, 2))
}
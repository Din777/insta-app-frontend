import { Component } from 'react'
import { connect } from 'react-redux'
import { PostList } from './PostList.jsx'
import { loadPosts, removePost } from '../store/action/postActions.js'
import { AddPost } from '../cmps/AddPost.jsx'
import { RemovePostConfirm } from '../cmps/RemovePostConfirm.jsx'

class _InstaApp extends Component {

    state = {
        isNewPost: false,
        isRemovePost: false,
        postToRemove: null
    }

    onToggleRemovePost = (postId = null, userId = null) => {
        console.log('postId', postId, 'userId', userId)
        // console.log('toggleRemovePost', this.state.isRemovePost);

        if (this.state.isRemovePost) {
            this.setState({ isRemovePost: false })
            this.setState({ postToRemove: null })
        }
        else {
            this.setState({ isRemovePost: true })
            this.setState({ postToRemove: { postId, userId } })

        }
    }

    onAddPostTrue = () => {
        // console.log('is post true- before', this.state);
        if (!this.state.isNewPost) this.setState({ isNewPost: true })
    }

    onAddPostFalse = () => {
        // console.log('is post false- before', this.state);
        if (this.state.isNewPost) this.setState({ isNewPost: false })
    }

    onRemovePost = () => {
        console.log('enter onRemovePost');
        this.props.removePost(this.state.postToRemove, this.props.loggedinUser)
    }

    componentDidMount() {
        this.props.loadPosts(this.props.filterBy)
    }

    render() {
        const { posts } = this.props
        return (
            <section className="app-body">
                {this.state.isRemovePost && <RemovePostConfirm
                    toggleRemovePost={this.onToggleRemovePost}
                    postToRemove={this.state.postToRemove}
                    loggedinUser={this.props.loggedinUser}
                    removePost={this.onRemovePost}
                />}
                <PostList posts={posts} toggleRemovePost={this.onToggleRemovePost} />
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="add-post-btn" onClick={this.onAddPostTrue} viewBox="0 0 477.867 477.867"><path d="M392.533 0h-307.2C38.228.056.056 38.228 0 85.333v307.2c.056 47.105 38.228 85.277 85.333 85.333h307.2c47.105-.056 85.277-38.228 85.333-85.333v-307.2C477.81 38.228 439.638.056 392.533 0zm51.2 392.533c0 28.277-22.923 51.2-51.2 51.2h-307.2c-28.277 0-51.2-22.923-51.2-51.2v-307.2c0-28.277 22.923-51.2 51.2-51.2h307.2c28.277 0 51.2 22.923 51.2 51.2v307.2z"></path><path d="M324.267 221.867H256V153.6c0-9.426-7.641-17.067-17.067-17.067s-17.067 7.641-17.067 17.067v68.267H153.6c-9.426 0-17.067 7.641-17.067 17.067S144.174 256 153.6 256h68.267v68.267c0 9.426 7.641 17.067 17.067 17.067S256 333.692 256 324.267V256h68.267c9.426 0 17.067-7.641 17.067-17.067s-7.642-17.066-17.067-17.066z"></path></svg>
                    {/* <button className="add-post-btnn" onClick={this.onAddPostTrue}>➕</button> */}
                </div>
                {this.state.isNewPost && <AddPost addPostFalse={this.onAddPostFalse} />}
                <footer className="main-footer flex justify-center ">
                    <small>InstaApp - All Rights Reserved © 2021</small>
                </footer>
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.postModule.posts,
        loggedinUser: state.postModule.loggedinUser
    }
}

const mapDispatchToProps = {
    loadPosts,
    removePost
}

export const InstaApp = connect(mapStateToProps, mapDispatchToProps)(_InstaApp);

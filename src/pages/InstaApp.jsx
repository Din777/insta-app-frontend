import { Component } from 'react'
import { connect } from 'react-redux'
import { PostList } from './PostList.jsx'
import { loadPosts, removePost } from '../store/action/postActions.js'
import { AddPost } from '../cmps/AddPost.jsx'
import { RemovePostConfirm } from '../cmps/RemovePostConfirm.jsx'

class _InstaApp extends Component {

    state = {
        isNewPost: false,
        isRemovePost: false
    }

    onToggleRemovePost = () => {
        console.log('toggleRemovePost');
        if (this.state.isRemovePost) this.setState({ isRemovePost: false })
        else this.setState({ isRemovePost: true })
    }

    onAddPostTrue = () => {
        // console.log('is post true- before', this.state);
        if (!this.state.isNewPost) this.setState({ isNewPost: true })
    }

    onAddPostFalse = () => {
        // console.log('is post false- before', this.state);
        if (this.state.isNewPost) this.setState({ isNewPost: false })
    }


    // componentDidMount() {
    //     const some = loadPosts(this.props.filterBy)
    //     console.log('this',some);
    // }

    componentDidMount() {
        this.props.loadPosts(this.props.filterBy)

    }

    render() {
        const { posts } = this.props
        return (
            <section className="app-body">
                {this.state.isRemovePost && <RemovePostConfirm toggleRemovePost={this.onToggleRemovePost} />}
                <PostList posts={posts} toggleRemovePost={this.onToggleRemovePost} />
                <div>
                    <button className="add-post-btn" onClick={this.onAddPostTrue}>➕</button>
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
        posts: state.postModule.posts
    }
}

const mapDispatchToProps = {
    loadPosts,
    removePost
}

export const InstaApp = connect(mapStateToProps, mapDispatchToProps)(_InstaApp);

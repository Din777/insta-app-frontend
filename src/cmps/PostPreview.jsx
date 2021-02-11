import { React, Component } from 'react';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { CommentList } from './CommentList.jsx'
import { removePost, editPost } from '../store/action/postActions.js'
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import { PostActionsBtns } from './PostActionsBtns.jsx'
import { AddComment } from './AddComment.jsx';
import { addComment } from '../store/action/commentActions.js'

class _PostPreview extends Component {

    // onAddComment = async (comment) => {
    //     console.log('enter on add comment');
    //     const { loggedinUser, post } = this.props
    //     const postCopy = { ...post } // might change to const postCopy = JSON.parse(JSON.stringify(post))
    //     postCopy.comments.unshift({ id: utilService.makeId(), txt: '', createdAt: Date.now(), byUser: { ...loggedinUser } })
    //     this.props.editPost(postCopy)

    // await addComment(comment, this.props.post)
    // console.log('succscsder');

    // Solution:
    // you take the post object,
    // const { post } = this.prop
    // const postCopy = JSON.parse(JSON.stringify(post))
    // postCopy.comments.push(comment)
    // Call for action to add editPost(postCopy)


    render() {
        // const { post } = this.props
        const { loggedinUser, post } = this.props
        return (
            <section>
                <Card className={"root"}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe" className={"avatar"}>
                                <img src={post.user.imgUrl} alt="" />
                            </Avatar>
                        }
                        action={
                            // <IconButton aria-label="settings" onClick={() => this.props.removePost(post, loggedinUser)}>
                            <IconButton aria-label="settings" className="more-opt-btn"
                                onClick={() => this.props.toggleRemovePost(post._id, post.user._id)}>
                                <MoreHorizIcon />
                            </IconButton>
                        }
                        title={post.user.username}
                    // subheader={post.title}
                    />
                    <div>
                        <img className="post-img" src={post.imgUrl} alt="" />
                    </div>
                    {/* <CardMedia
                        className={"media"}
                        image={post.title}
                        title="Paella dish"
                    /> */}
                    {<PostActionsBtns post={post} loggedinUser={loggedinUser} />}
                    <div className="post-title-container">
                        <span className="post-title-username">{post.user.username}</span>
                        <span className="post-title-text">{post.title}</span>
                    </div>
                    <p className="comments-counter">View all {post.comments.length} comments</p>
                    {<CommentList comments={post.comments} post={post} onEditPost={this.props.editPost} loggedinUser={loggedinUser} />}
                    <AddComment post={post} />
                </Card>
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
    removePost,
    editPost,
    addComment
}
export const PostPreview = connect(mapStateToProps, mapDispatchToProps)(_PostPreview);







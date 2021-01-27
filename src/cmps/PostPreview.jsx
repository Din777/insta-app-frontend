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
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { CommentList } from './CommentList.jsx'
import { utilService } from '../service/utilService.js'
import { removePost, editPost } from '../store/action/postActions.js'
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import { RemovePostConfirm } from './RemovePostConfirm.jsx';
import { PostActionsBtns } from './PostActionsBtns.jsx'
import { AddComment } from './AddComment.jsx';
import { addComment } from '../store/action/commentActions.js'

class _PostPreview extends Component {
    
    onAddComment = async (comment) => {
        // await addComment(comment, this.props.post)
        // console.log('succscsder');

        // Solution:
        // you take the post object,
        const { post } = this.prop
        const postCopy = JSON.parse(JSON.stringify(post))
        postCopy.comments.push(comment)
        // Call for action to add editPost(postCopy)

    }
    onToggleLiked = () => {
        const { loggedinUser, post } = this.props
        const postCopy = { ...post } // might change to JSON-parse+stringify
        const idx = postCopy.likes.findIndex(like => like.byUser._id === loggedinUser._id)
        if (idx === -1) postCopy.likes.push({ id: utilService.makeId(), byUser: { ...loggedinUser } })
        else postCopy.likes = postCopy.likes.filter(like => like.byUser._id !== loggedinUser._id)
        this.props.editPost(postCopy) //Next: Action > Service (+to backend) > Action > Dispatch (reducer)
    }

    render() {
        const { post } = this.props
        return (
            <section>
                <Card className={"root"}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe" className={"avatar"}>
                                <img src={post.user.imgUrl} />
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings" onClick={() => this.props.removePost(post._id)}>
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title={post.user.username}
                        subheader={post.title}
                    />
                    <Button color="primary">follow</Button>
                    <div>
                        <img className="user-img" src={post.imgUrl} />
                    </div>
                    <CardMedia
                        className={"media"}
                        image={post.title}
                        title="Paella dish"
                    />
                    {<PostActionsBtns post={post} toggleLiked={this.onToggleLiked} />}
                    <CommentList comments={post.comments} />
                    <AddComment addComment={this.onAddComment} />
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







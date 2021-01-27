
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import React, { Component } from 'react'
import { postService } from './../service/postService.js';
import { connect } from 'react-redux'
import { addComment, editComment } from './../store/action/commentActions';

class _CommentEdit extends Component {
    state = {
        comment: {}
    }
    componentDidMount() {
        this.loadpost()
    }

    loadPost = async () => {
        const { postId } = this.props.match.params;
        if (postId) {
            const post = await postService.getById(post)
            this.setState({ comment: post.comment })
        }
    }

    handleInput = (ev) => {
        console.log(ev);
        const { name, type } = ev.target
        var value = (type === 'checkbox') ? ev.target.checked :
            (type === 'number') ? +ev.target.value : ev.target.value
        if (name === "tags") {
            value = []
            for (var i = 0; i < ev.target.length; i++) {
                if (ev.target.options[i].selected) {
                    value.push(ev.target[i].value);
                }
            }
        }

        this.setState(prevState => {
            return {
                comment: {
                    ...prevState.comment,
                    [name]: value
                }
            }
        })
        console.log(this.state.comment, 'comment');
    }

    onSaveComment = async (ev) => {
        ev.preventDefault()
        const { comment } = this.state
        if (!comment._id) await this.props.addpost(comment)
        else await this.props.editComment(comment)
        this.props.history.push('/')
    }

    render() {
        return (
            <Card className={"root"} variant="outlined">
                <CardContent>
                    <Typography className={"title"} color="textSecondary" gutterBottom>
                        Word of the Day
                </Typography>
                    <Typography variant="h5" component="h2">
                        
                </Typography>
                    <Typography className={"pos"} color="textSecondary">
                        adjective
                </Typography>
                    <Typography variant="body2" component="p">
                        well meaning and kindly.
                  <br />
                        {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        );
    }
}

const mapStateToProps = state => {
    return {
        posts: state.postModule.posts,
    };
};
const mapDispatchToProps = {
    editComment,
    addComment
}

export const CommentEdit = connect(mapStateToProps, mapDispatchToProps)(_CommentEdit)
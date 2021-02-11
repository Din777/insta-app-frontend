import { React, Component } from 'react'
import { addPost } from '../store/action/postActions.js'
import { connect } from 'react-redux'
import { cloudinaryService } from '../service/cloudinaryService.js';


export class _AddPost extends Component {

    state = {
        post: {
            title: '',
            imgUrl: null,
            createdAt: Date.now(),
            user: {
                "_id": "sadad748",
                "username": "abraham_lincoln",
                "imgUrl": "https://www.goodesign.co.il/wp-content/uploads/2017/03/HIPSTORY-Shimoni-Lincoln.jpg"
            },
            comments: [],
            likes: []
        }

    }

    onUploadImg = async (ev) => {
        const imgUrl = await cloudinaryService.uploadImg(ev.target.files[0]);
        const postCopy = { ...this.state.post, imgUrl: imgUrl }
        this.setState({ post: postCopy })
    }

    onSavePost = async ev => {
        ev.preventDefault()
        const savedPost = this.state.post
        if (!this.state.post.title || !this.state.post.imgUrl) return alert('All fields are required')
        await this.props.addPost(savedPost)
        this.setState({ savedPost: { title: '', imgUrl: '' } })
        this.props.addPostFalse()
    }

    onInputChange = (ev) => {
        const post = { ...this.state.post }
        post[ev.target.name] = ev.target.value
        this.setState({
            post
        })
    }

    render() {
        const imageState = (this.state.post.imgUrl) ? <img src={this.state.post.imgUrl} /> : <label htmlFor="imgUploader" className="add-post-modal-img-up">🖼</label>
        return (
            <div className="screen">
                <div className="modal">
                    <form className="add-post-modal">
                        <div className="add-post-modal-close-btn-container">
                            <button className="add-post-modal-close-btn" onClick={this.props.addPostFalse}>X</button>
                        </div>
                        <h4>New post</h4>
                        <textarea rows="1" placeholder="Write here" name="title" className="add-post-modal-textarea" onChange={this.onInputChange}></textarea>
                        <input type="file" accept="image/*" id="imgUploader" name="imgUrl" onChange={this.onUploadImg} hidden />
                        {imageState}
                        <div className="add-post-btn-container">
                            <button type="submit" className="add-post-modal-btn" onClick={this.onSavePost}>Add</button>
                        </div>
                    </form>
                </div>
            </div>
        );

    }


}

const mapStateToProps = state => {
    return {
        posts: state.postModule.posts,
    }
}

const mapDispatchToProps = {
    addPost
}

export const AddPost = connect(mapStateToProps, mapDispatchToProps)(_AddPost)


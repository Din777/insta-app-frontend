import { React, Component } from 'react'
import { addPost } from '../store/action/postActions.js'
import { connect } from 'react-redux'
import { postService } from '../service/postService.js'
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
        console.log('imgUrl', imgUrl)
        const postCopy = { ...this.state.post, imgUrl: imgUrl }
        this.setState({ post: postCopy }, ()=> {
            console.log('this.state.post', this.state.post)
        })
    }

    onSavePost = async ev => {
        ev.preventDefault()
        console.log('this.state', this.state)
        const savedPost = this.state.post
        console.log('this.state.post.title:', this.state.post.title);
        if (!this.state.post.title || !this.state.post.imgUrl) return alert('All fields are required')
        await this.props.addPost(savedPost)
        this.setState({ savedPost: { title: '', imgUrl: '' } })
        this.props.addPostFalse()
    }

    onInputChange = (ev) => {//on input change
        console.log('ev.target.value:', ev.target.value)
        const post = { ...this.state.post }
        post[ev.target.name] = ev.target.value
        console.log(post[ev.target.name])
        this.setState({
            post
        })
    }

    // onAddPostToView = () => {
    //     postService.add(this.state.post)
    //         .then(savedPost => {
    //             this.props.addPost()
    //         })
    // }

    render() {
        const imageState = (this.state.post.imgUrl)? <img src={this.state.post.imgUrl} /> : <label htmlFor="imgUploader" className="add-post-modal-img-up">🖼</label>
        console.log('this.state.post.imgUrl', this.state.post.imgUrl)
        console.log('imageState', imageState)
        return (
            <div className="screen">
                <div className="modal">
                    <form className="add-post-modal">
                        <div className="add-post-modal-close-btn-container">
                            <button className="add-post-modal-close-btn" onClick={this.props.addPostFalse}>X</button>
                        </div>
                        <h4>New post</h4>
                        <textarea rows="1" placeholder="Write here" name="title" className="add-post-modal-textarea" onChange={this.onInputChange}></textarea>
                        {/* <label htmlFor="imgUploader" className="add-post-modal-img-up">🖼</label> */}
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


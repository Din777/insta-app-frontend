import { postService } from '../service/postService.js'
import {React ,Component } from 'react'

export class PostDetails extends Component {

    state = {
        post: null,
    }

    componentDidMount() {
        this.loadPost()
    }

    loadPost = async () => {
        const { postId: postId } = this.props.match.params
        const post = await postService.getById(postId)
        this.setState({ post: post })

    }

    render() {
        return (
            <section className="post-details">
                <h1>Post Details</h1>
                <hr></hr>
                <div className="post-header">
                    {/* <img className="user-img" src="https://web.whatsapp.com/pp?e=https%3A%2F%2Fpps.whatsapp.net%2Fv%2Ft61.24694-24%2F77402514_502924500377471_1258179255366662198_n.jpg%3Foh%3D77e84cc8407e44c76173be482c09bbc8%26oe%3D6009246F&t=l&u=972528399671%40c.us&i=1584824787&n=GRzL%2BHjyPxbh0GlKjuOiDPbW3H0Z3FwRZ38MJJmWq6U%3D"/> */}

                </div>
            </section>

        )
    }
}
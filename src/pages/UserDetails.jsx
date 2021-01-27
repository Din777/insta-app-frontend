import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
// import tileData from './tileData';
import { connect } from 'react-redux'
import { userService } from "../service/userService.js";
import { utilService } from "../service/utilService.js";
import { Component, Fragment } from 'react'
import { postService } from "../service/postService.js"

class _UserDetails extends Component {
    state = {
        logedInUser:null,
        posts: null
    }

    componentDidMount = async () => {
        const { loggedinUser } = this.props
        const posts = await postService.query({ byUserId: loggedinUser._id })
        console.log('posts: ', posts);
        this.setState({ posts: posts })
    }
    render() {
        const { posts } = this.state
        const { loggedinUser } = this.props
        const { username } = loggedinUser

        if (!posts) return <h1>Loading...</h1>
        return (

            <div className={"root"}>
                <GridList cellHeight={160} className={"gridList"} cols={3}>
                    {posts.map((post) => (
                        <GridListTile key={post._id} cols={post.cols || 1}>
                            <img src={post.imgUrl} alt={post.title} />
                        </GridListTile>
                    ))}
                </GridList>
            </div>
            /**
             * The example data is structured as follows:
             *
             * import image from 'path/to/image.jpg';
             * [etc...]
             *
             * const tileData = [
             *   {
             *     img: image,
             *     title: 'Image',
             *     author: 'author',
             *     cols: 2,
             *   },
             *   {
             *     [etc...]
             *   },
             * ];
             */


        )
    }
}

const mapStateToProps = state => {
    const { loggedinUser } = state.user
    return {
        loggedinUser
    }
}

export const UserDetails = connect(mapStateToProps)(_UserDetails)




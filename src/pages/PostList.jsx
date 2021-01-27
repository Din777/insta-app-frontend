import { PostPreview } from "../cmps/PostPreview.jsx"

export function PostList({ posts, onRemove, toggleRemovePost }) {

    return (
        <div className="post-list">
            {posts.map(post => {
                return <PostPreview className="post-preview" key={post._id} post={post} onRemove={onRemove} toggleRemovePost={toggleRemovePost} />
            })}
        </div>
    )
}
import { CommentPreview } from "./CommentPreview.jsx"

export function CommentList({ comments, post, loggedinUser, onEditPost }) {
    return (
        <div className="comment-list">
            {comments.map(comment => {
                return <CommentPreview key={comment.id} comment={comment} post={post} onEditPost={onEditPost} loggedinUser={loggedinUser} />
            })}
        </div>
    )
}
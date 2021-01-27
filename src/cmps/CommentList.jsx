import { CommentPreview } from "./CommentPreview.jsx"

export function CommentList({ comments }) {
    return (
        <div className="comment-list">
            {comments.map(comment => {
                return <CommentPreview key={comment._id} comment={comment} />
            })}
        </div>
    )
}
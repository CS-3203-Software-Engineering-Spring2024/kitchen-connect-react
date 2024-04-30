import React, { useState } from 'react';
import './comments.css';

const Comments: React.FC = () => {
    const [posts, setPosts] = useState([
        { body: "Wow looks great!!!", author: "James", id: 1 },
        { body: "Yum, I wish I had some", author: "Harry", id: 2 },
        { body: "Is this gluten-free?", author: "Greg", id: 3 },
        { body: "I don't know about this.", author: "Jane", id: 4 },
        { body: "Looks good", author: "Carrie", id: 5 }
    ]);

    const [newComment, setNewComment] = useState({ body: '', author: '' });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setNewComment(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const addComment = () => {
        if (newComment.body && newComment.author) {
            const newPost = {
                ...newComment,
                id: posts.length + 1 // Generating a unique ID
            };
            setPosts([...posts, newPost]);
            // Clearing the input fields
            setNewComment({ body: '', author: '' });
        }
    };

    return (
        <div className="comment-container">
            <div className="comments">
                {posts.map((post) => (
                    <div className="post" key={post.id}>
                        {/* User info */}
                        <div className="user-info">
                            <span className="username">{post.author}</span>
                        </div>
                        {/* Post content */}
                        <div className="post-content">
                            <div className="caption-container">
                                {/* Post caption */}
                                <p className="caption">
                                    <span className="caption-username">
                                        {post.author}
                                    </span>{' '}
                                    {post.body}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* Form for adding new comments */}
            <div className="add-comment-form">
                <input
                    type="text"
                    name="author"
                    placeholder="Your Name"
                    value={newComment.author}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="body"
                    placeholder="Your Comment"
                    value={newComment.body}
                    onChange={handleInputChange}
                />
                <button onClick={addComment}>Add Comment</button>
            </div>
        </div>
    );
};

export default Comments;

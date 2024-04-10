import React from 'react';
import './feed.css';

const Feed = () => {
    return (
        <div className="feed">
            {/* Sample post */}
            <div className="post">
                {/* User info */}
                <div className="user-info">
                    <img
                        className="user-photo"
                        src="placeholder.jpg" // Replace with actual user photo URL or use a placeholder
                        alt="User"
                    />
                    <span className="username">Username</span>
                </div>
                {/* Post content */}
                <div className="post-content">
                    <img
                        className="post-photo"
                        src="placeholder.jpg" // Replace with actual post photo URL or use a placeholder
                        alt="Post"
                    />
                    <div className="post-actions">
                        {/* Like button */}
                        <button className="like-button">Like</button>
                        {/* Comment button */}
                        <button className="comment-button">Comment</button>
                        {/* Repost button */}
                        <button className="repost-button">Repost</button>
                    </div>
                    {/* Post caption */}
                    <p className="caption">This is a sample post caption.</p>
                </div>
            </div>
            {/* Add more posts here */}
        </div>
    );
};

export default Feed;

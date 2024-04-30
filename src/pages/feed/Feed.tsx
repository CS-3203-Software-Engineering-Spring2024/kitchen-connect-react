import React, { useState, useEffect } from 'react';
import './feed.css';

import {
    anhnguyen,
    commentIcon,
    likeIcon,
    repostIcon,
    bookmarkIcon,
    gordonRamsey,
    burgerWithLettuce,
} from '../../assets';

// TODO: Change photos to not use Gordan Ramsey as example
const Feed = () => {
    const [posts, setPosts] = useState([
        {
            picture: gordonRamsey,
            content: anhnguyen,
            body: 'test test test',
            author: 'Gordan',
            id: 1,
        },
        {
            picture: gordonRamsey,
            content: burgerWithLettuce,
            body: 'test test2 test2',
            author: 'Jon',
            id: 2,
        },
        {
            picture: gordonRamsey,
            content: anhnguyen,
            body: 'test test3 test3',
            author: 'Gary',
            id: 3,
        },
        {
            picture: gordonRamsey,
            content: anhnguyen,
            body: 'test test4 test4',
            author: 'Billy',
            id: 4,
        },
        {
            picture: gordonRamsey,
            content: anhnguyen,
            body: 'test test4 test4',
            author: 'Karen',
            id: 5,
        },
    ]);
    // TODO: Add comment functionality on posts
    //const [comments, setComments] = useState([]);

    return (
        <div className="feed-container">
            <div className="feed">
                {posts.map((post) => (
                    <div className="post" key={post.id}>
                        {/* User info */}
                        <div className="user-info">
                            <img
                                className="user-photo"
                                src={post.picture} // Use post picture instead of gordonRamsey
                                alt="User"
                            />
                            <span className="username">{post.author}</span>
                        </div>
                        {/* Post content */}
                        <div className="post-content">
                            <img
                                className="post-photo"
                                src={post.content} // Use placeholder image or actual post photo URL
                                alt="Photo by Anh Nguyen on Unsplash"
                            />
                            <div className="post-actions">
                                {/* Like button */}
                                <button className="post-actions-button like-button">
                                    <img src={likeIcon} alt="Like" />
                                </button>
                                {/* Comment button */}
                                <button className="post-actions-button comment-button">
                                    <img src={commentIcon} alt="Comment" />
                                </button>
                                {/* Repost button */}
                                <button className="post-actions-button repost-button">
                                    <img src={repostIcon} alt="Repost" />
                                </button>
                                <button className="post-actions-button save-button">
                                    <img src={bookmarkIcon} alt="Save" />
                                </button>
                            </div>
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
        </div>
    );
};

export default Feed;

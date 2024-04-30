import { useState } from 'react';
//import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './feed.css';

import {
    anhnguyen,
    commentIcon,
    likeIcon,
    likeIconColored,
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

    setPosts([
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

    const [liked, setLiked] = useState(false); // State to track if liked

    const toggleLike = () => {
        setLiked(!liked); // Toggle the liked state
        console.log('Like toggled', liked);
    };
    
    const [postActions] = useState([
        { name: 'Like', icon: liked ? likeIconColored : likeIcon, onClick: toggleLike, path: '/', id: 1 },
        { name: 'Comment', icon: commentIcon, path: '/Comments', id: 2 },
        { name: 'Repost', icon: repostIcon, path: '/', id: 3 },
        { name: 'Bookmark', icon: bookmarkIcon, path: '/', id: 4 },
    ]);

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
                                    {/* Render post actions */}
                                    {postActions.map((action) => (
                                    <Link key={action.id} to={action.path}>
                                        <button className="post-actions-button" key={action.id} onClick={action.onClick || (() => {})}>
                                            <img src={action.icon} alt={action.name} />
                                        </button>
                                    </Link>
                                ))}         
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

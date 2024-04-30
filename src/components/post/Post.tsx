import './post.css';

import React, { useState } from 'react';

const PostComponent: React.FC = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [caption, setCaption] = useState('');
    const [tags, setTags] = useState('');

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            if (
                file.type.startsWith('image/') ||
                file.type.startsWith('video/')
            ) {
                setSelectedFile(file);
            } else {
                alert('Please select a photo or video file.');
            }
        }
    };

    const handleCaptionChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setCaption(event.target.value);
    };

    const handleTagsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTags(event.target.value);
    };

    const handlePost = () => {
        // Here you can handle the post logic, like sending the data to the server.
        console.log('Posted:', { selectedFile, caption, tags });
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <input
                type="text"
                placeholder="Add a caption..."
                value={caption}
                onChange={handleCaptionChange}
            />
            <input
                type="text"
                placeholder="Add tags..."
                value={tags}
                onChange={handleTagsChange}
            />
            <button onClick={handlePost}>Post</button>
        </div>
    );
};

export default PostComponent;

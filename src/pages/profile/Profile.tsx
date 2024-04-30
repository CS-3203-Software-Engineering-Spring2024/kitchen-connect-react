import React, { useState, useEffect } from 'react';

interface User {
    ID: string;
    name: string;
    email: string;
    isPrivate: boolean;
    followings: string[];
}

const Profile: React.FC = () => {

    const [user, setUser] = useState<User>({
        ID: '12345',
        name: 'John Doe',
        email: 'john.doe@example.com',
        isPrivate: false,
        followings: ['user2', 'user3', 'user4']
    });

    return (
        <div className="profile-page-container">

            <div className="title-container">
            
                <h2 className="profile-name">{user.name}</h2>

            </div>

            {!user.isPrivate && (
                <div className="public-info-container">

                

                </div>
            )}
            
        </div>
    );
    
};

export default Profile;
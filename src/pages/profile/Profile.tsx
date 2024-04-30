import React, { useState, useEffect } from 'react';

interface User {
    ID: number;
    name: string;
    email: string;
    isPrivate: boolean;
    followings: number[];
}

const Profile: React.FC = () => {

    const [user, setUser] = useState<User>({
        ID: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        isPrivate: false,
        followings: [2, 3, 4, 5]
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
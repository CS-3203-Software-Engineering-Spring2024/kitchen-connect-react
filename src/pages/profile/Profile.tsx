import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

interface Following {
    ID: string;
    name: string;
    url: string;
}

interface User {
    ID: string;
    name: string;
    email: string;
    isPrivate: boolean;
    followings: Following[];
}

const Profile: React.FC = () => {

    const { username } = useParams();

    //MODIFY THIS TO GET THE USER JSON OBJECT BASED ON THE ABOVE USERNAME
    const [user, setUser] = useState<User>({
        ID: '1',
        name: 'John Doe',
        email: 'john.doe@example.com',
        isPrivate: false,
        followings: []
    });

    return (
        <div className="profile-page-container">

            <div className="title-container">
            
                <h2 className="profile-name">{user.name}</h2>

            </div>

            {/*DISPLAYS ON OWN PROFILE*/}
            {localStorage.getItem("user_id")===user.ID && (

                <div className="own-profile-container">

                </div>

            )}

            {/*DISPLAYS ON OTHER PROFILES*/}
            {localStorage.getItem("user_id")===user.ID && (

                <div className="other-profile-container">

                    {/*DISPLAYS ON PUBLIC PROFILES*/}
                    {!user.isPrivate && (

                        <div className="public-info-container">

                        </div>

                    )}

                    {/*DISPLAYS ON PRIVATE PROFILES*/}
                    {user.isPrivate && (

                        <div className="private-info-container">

                        </div>

                    )}

                </div>

            )}
            
        </div>
    );
    
};

export default Profile;
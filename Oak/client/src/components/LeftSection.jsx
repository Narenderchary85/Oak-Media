import React from 'react';
import bgImage from '../assets/de_bg_image.png';
import profileimg from '../assets/profileimg.avif';
import proimg from '../assets/pro-img.avif';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFollowUser } from '../storeReducx/actionReudcer';

const LeftSection = () => {
    const user = useSelector(state => state.users.user);
    const allusers = useSelector(state => state.users.allusers);
    const dispatch = useDispatch();
    const token = localStorage.getItem('token');

    return (
        <div className="w-full lg:w-72 xl:w-80 px-4 lg:px-0 lg:ml-6 mt-5 space-y-6 mt-10">

            <Link to='/profile' className="block group">
                {Array.isArray(user) && user.length > 0 ? (
                    user.map((use) => (
                        <div key={use._id} className="w-full rounded-2xl bg-white shadow-md  border border-gray-100 transition-all duration-300 group-hover:shadow-lg relative">

                            <div className="h-32 bg-gradient-to-r from-blue-50 to-blue-100 relative object-cover">
                                <img 
                                    src={bgImage} 
                                    alt="background" 
                                    className="w-full h-full object-cover opacity-70" 
                                />
                            </div>
                            
                            <div className="flex justify-center -mt-12 mb-4">
                            <div className="h-20 w-20 rounded-full border-4 border-white shadow-md overflow-hidden bg-white absolute">
                              <img 
                                src={use.profilePicture ? `http://localhost:1000${use.profilePicture}` : profileimg} 
                                className="w-full h-full object-cover" 
                                alt="Profile" 
                              />
                            </div>
                          </div>

                            <div className="px-4 pb-4 text-center mt-20">
                                <h3 className="text-xl font-semibold text-gray-800 mb-1">{use.username}</h3>
                                <p className="text-sm text-gray-500 mb-4">{use.desc || "No description yet"}</p>
                                
                                <div className="flex justify-center space-x-6 border-t border-gray-100 pt-4">
                                    <div className="text-center">
                                        <div className="text-lg font-medium text-blue-600">{Array.isArray(use.following) ? use.following.length : 0}</div>
                                        <div className="text-xs text-gray-500 uppercase tracking-wider">Following</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-lg font-medium text-blue-600">{Array.isArray(use.followers) ? use.followers.length : 0}</div>
                                        <div className="text-xs text-gray-500 uppercase tracking-wider">Followers</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="w-full h-40 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center">
                        <p className="text-gray-400">Loading profile...</p>
                    </div>
                )}
            </Link>
            
            <div className="w-full bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
                <div className="px-4 py-3 border-b border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-800">Connection Requests</h3>
                    <p className="text-xs text-gray-500">People who want to connect with you</p>
                </div>
                
                <div className="divide-y divide-gray-100">
                    {allusers.length > 0 ? (
                        allusers.map((all) => (
                            <div key={all._id} className="p-4 flex items-center hover:bg-blue-50 transition-colors duration-200">
                                <div className="flex-shrink-0 mr-3">
                                    <img 
                                        src={all.profilePicture ? `http://localhost:1000${all.profilePicture}` : proimg} 
                                        alt={all.username} 
                                        className="h-12 w-12 rounded-full object-cover border-2 border-white shadow-sm"
                                    />
                                </div>
                                <div className="flex-grow min-w-0">
                                    <h4 className="text-sm font-medium text-gray-800 truncate">{all.username}</h4>
                                    <p className="text-xs text-gray-500 truncate">{all.desc || "No description"}</p>
                                </div>
                                {user.map((use) => (
                                    <button
                                        key={use._id}
                                        onClick={() => dispatch(toggleFollowUser(all._id, token, use.following?.includes(all._id)))}
                                        className={`ml-2 px-3 py-1 rounded-full text-xs font-medium transition-colors duration-200 ${
                                            use.following.includes(all._id)
                                                ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                                : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                                        }`}
                                    >
                                        {use.following.includes(all._id) ? 'Connected' : 'Connect'}
                                    </button>
                                ))}
                            </div>
                        ))
                    ) : (
                        <div className="p-4 text-center">
                            <p className="text-sm text-gray-500">No connection requests yet</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LeftSection;
import { ALL_USERS, FOLLOWERS_COUNT, UNFOLLOWERS_COUNT, USER_DETAILS,USER_DETAILS_FAILED } from "./actionType";

const initialState={
    allusers:[],
    user:[],
    error:'',
    followerCount:0,
    followingCount:0
}

export const usersReducers=(state=initialState,action)=>{
    switch(action.type){
        case ALL_USERS:
            return {
                ...state,
                allusers:Array.isArray(action.payload) ? action.payload : [action.payload]
            }
        case USER_DETAILS:
            return{
                ...state,
                user:Array.isArray(action.payload) ? action.payload : [action.payload]
            }
        case USER_DETAILS_FAILED:
            return {
                ...state,
                error:action.payload
            }
            case FOLLOWERS_COUNT:
                return {
                    ...state,
                    user: state.user.length > 0
                        ? [{
                            ...state.user[0],
                            followers: state.user[0].followers
                                ? [...state.user[0].followers, action.payload]
                                : [action.payload]
                        }]
                        : state.user, 
                    followersCount: state.followerCount + 1
                };
            
            case UNFOLLOWERS_COUNT:
                return {
                    ...state,
                    user: state.user.length > 0
                        ? [{
                            ...state.user[0],
                            followers: state.user[0].followers
                                ? state.user[0].followers.filter(id => id !== action.payload) 
                                : []
                        }]
                        : state.user, 
                    followersCount: state.followerCount - 1
                };
            
        default:
            return state;
    }
}

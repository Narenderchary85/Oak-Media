import { GET_POSTS_OF_USER, OPEN_EDIT, POP_POST, UPLOAD_POST } from "./actionType";

const initialState={
    userposts:[],
    posts:[],
    open:false,
    opene:false,
}


export const postReducers=(state=initialState,action)=>{
    switch(action.type){
        case POP_POST:
            return{
                ...state,
                open:action.payload
            }
        case UPLOAD_POST:

            return{
                ...state,
                posts:Array.isArray(action.payload) ? action.payload : [action.payload]
            }
        case GET_POSTS_OF_USER:
            return{
                ...state,
                userposts:Array.isArray(action.payload) ? action.payload : [action.payload]
            }
        case OPEN_EDIT:
            return {
                ...state,
                opene:action.payload
            }
        default:
            return state;
    }
}
import { USER_DETAILS,USER_DETAILS_FAILED,POP_POST,UPLOAD_POST, GET_POSTS_OF_USER, OPEN_EDIT, FOLLOWERS_COUNT, ALL_USERS } from "./actionType";
import axios from "axios";

export const allUsersDetails=(token)=>async(dispatch)=>{
    try{
        const response= await axios.get('http://localhost:1000/user/allusers',{
            headers:{ Authorization:`Bearer ${token}`  }
        });
        dispatch({
            type:ALL_USERS,
            payload:response.data
        })
    }catch(err){
        console.log(err.message)
    }
}

export const userDetails=(token)=>{
    return async(dispatch)=>{
        try{
            const response= await axios.get('http://localhost:1000/user/getuser',{
                headers:{
                  Authorization:`Bearer ${token}`
                }
              });
            dispatch({
                type:USER_DETAILS,
                payload:response.data
            })
        }catch(err){
            dispatch({
                type:USER_DETAILS_FAILED,
                payload:err.message
            });
            console.log(err.message);
        }
    }
}

export const popPost=(prop)=>(dispatch)=>{
    try{
        dispatch({
            type:POP_POST,
            payload:prop
        })
    }catch(err){
        console.log(err.message)
    }
}


export const uploadPost = (token, data) => async (dispatch) => {
    try {
        const formData = new FormData();
        formData.append('desc', data.desc);

        if (data.image && data.image instanceof File) {
            formData.append('image', data.image);
        } else {
            console.error("Invalid image format. Expected a File object.");
            return;
        }

        const response = await axios.post(
            'http://localhost:1000/post/addPost',
            formData,
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                }
            }
        );

        console.log(response.data);
        dispatch({
            type: UPLOAD_POST,
            payload: response.data,
        });

    } catch (err) {
        console.log(err.response?.data || err.message);
    }
};

export const getPostOfUser=(token)=>{
    return async(dispatch)=>{
        try{
            const response= await axios.get('http://localhost:1000/post/getPostOfUser',{
                headers:{
                  Authorization:`Bearer ${token}`
                }
              });
            dispatch({
                type:GET_POSTS_OF_USER,
                payload:response.data
            })
        }catch(err){
            console.log(err.message);
        }
    }
}

export const openEdit=(prop)=>(dispatch)=>{
    try{
        dispatch({
            type:OPEN_EDIT,
            payload:prop
        })
        console.log(prop)
    }catch(err){
        console.log(err.message)
    }
}

export const followUser=(otherId,token)=>async (dispatch)=>{
    try{
        const response= await axios.put(`http://localhost:1000/user/follow/${otherId}`,{},{
            headers:{ Authorization:`Bearer ${token}` }
        });
        dispatch({
            type:FOLLOWERS_COUNT,
            payload:otherId
        })
    }catch(err){
        console.log(err.message)
    }
}
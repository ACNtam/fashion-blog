import React from "react";
import { useState, useEffect } from "react";
import { useReducer } from "react";


// create useReducer for changing values
const reducer = (state, action) => {
    console.log(action, 'this is the action');
    switch (action.type) {
        case 'addTitle':
            return { ...state, title: action.payload };

        case 'addImage':
            return { ...state, Image: action.payload };

        case 'addContent':
            return { ...state, content: action.payload };

        case 'clearForm':
            return {  title: '', image: '',content:'' };
        default:
            return state;
    }
};
const AddPost = () =>{

   
    const initialState = {
         title: '', image: '', content: ''
    };

    const[state, dispatch] = useReducer(reducer, initialState);
    const handleAddPost = async (e) =>{
        e.preventDefault();

        const newPost ={
             title: state.title, image: state.image, content: state.content,
        }

        const response = await fetch('http://localhost:8080/posts',{
            method: 'POST',
            headers: {
                Accept:'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPost)
        });
        const content = await response.json();
        dispatch({type:'clearForm'});
    }
    return  (
        <>
<div className="addPost">
    <h2 className="title">Add a New Post</h2>

    <form onSubmit={handleAddPost}>
        <br></br>
        <label>Title: </label>
        <input type="text" value={state.title} onChange={(e) => dispatch({type: 'addTitle', payload: e.target.value})}/>
        <br></br>
        <label>Image: </label>
        <input type="text" value={state.image} onChange={(e) => dispatch({type: 'addImage', payload: e.target.value})}/>
        <br></br>
        <label>Content: </label>
        <input type="text" value={state.content} onChange={(e) => dispatch({type: 'addPhone', payload: e.target.value})}/>
        <br></br>
        <input type="submit"/>
    </form>
</div>
        </>
    )
}

export default AddPost;
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import {useSelector, useDispatch} from "react-redux"
import { fetchPosts } from './postsSlice';

const PostsView = () => {

    const {isLoading, posts, error} = useSelector(state=> state.posts);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchPosts())
    },[dispatch])
 
    return (
        <div>
            {isLoading && <h1 className='text-center text-2xl font-semibold'>Loading.....</h1>}
            {error && <h1 className='text-center text-2xl font-semibold text-red-500'>Error: {error}</h1>}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-5 p-2">
                {
                    posts && posts.map((post)=><div key={post.id} className='border p-2'>
                        <h4 className='text-2xl font-semibold'>{post.title}</h4>
                        <p>{post.body}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PostsView;
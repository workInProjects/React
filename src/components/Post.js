import React from 'react';
import Product from './Product'

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className='post'>
      <div className='row'>
        {posts.map(post => (
          <div key={post.id} className='col col-xm-4'>
            <Product post={post} />
          </div>
        ))}
      </div>
    </div>
  );
};
  
export default Posts;
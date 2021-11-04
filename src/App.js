import React, { useState, useEffect } from 'react';
import Posts from './components/Post';
import Pagination from './components/Paginator';
import Search from  './components/Search'
import axios from 'axios';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState([])
  const [postsCount, setPostsCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async (page = 1, search = "") => {
    setLoading(true);
    let url = `https://testings.digisol.agency/api/v1/products?page=${page}`
    if (search) {
      url += `&search=${search}`
    }
    const res = await axios.get(url)
    console.log(res.data.results)
    setPosts(res.data.results);
    setPostsCount(res.data.count)
    setLoading(false);
  }

  const onSearch = (text) => {
    fetchPosts(1, text)
  }

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
    fetchPosts(pageNumber)
  }

  return (
    <div className='app'>
      <Search onSearch={onSearch}/>
    <div>
    <div className='container mt-5'>
      <h1 className='text-primary mb-3'></h1>
      <Posts posts={posts} />
      <Pagination
        postsPerPage={postsPerPage}  
        totalPosts={postsCount}
        paginate={paginate}
      />
    </div>
 
    </div>
    </div>
  );
};

export default App;
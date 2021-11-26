import React, {useState,useEffect} from 'react';
import Select from 'react-select';
import queryString from 'query-string';
import { createBrowserHistory } from "history";
import './Search.css';

function Search(props) {
  let history = createBrowserHistory(); 
  const [filters, setFilters] = useState();

  useEffect(() => {
    setFilters(queryString.parse(window.location.search));
  }, []); 


  const options = [
   { value: 'au', label: 'Austria'},
    { value: 'br', label: 'Brasilia'},
    { value: 'ca', label: 'Canada' },
    { value: 'fr', label: 'France'},
    { value: 'de', label: 'Germany'},
    { value: 'us', label: 'United States'},
    { value: 'ch', label: 'Switzerland'},
    { value: 'es', label: 'Spain'},
    { value: 'fi', label: 'Finland'},
    { value: 'ie', label: 'Republic of Ireland'},
    { value: 'ir', label: 'Iran'},
  ]; 
 
  const  gender = [
    { value: 'all', label: 'All'},
    { value: 'male', label: 'Male'},
    { value: 'female', label: 'Female'}  
  ];

  const filteredNat = filters && filters.nat ? filters.nat.split(',') : [];
 
  const addFilter = (type, obj) => {  
    let filterData = '';
    if (Array.isArray(obj)){
      filterData = obj.map(o => o.value).join(','); 
    } else {
      filterData = obj.value;
    }
    const newQuery = {
      ...filters,
      [type]: filterData
    };
    setFilters(newQuery)
  };

  const onSearch = (e) => {
    e.preventDefault()
    history.push({
      pathname: window.location.pathname,
      search: `?${queryString.stringify(filters)}`
    });
    props.onSearch();
  };

  return (
    <div className='search'>
        <Select
          className='select' 
          placeholder='Gender'
          options={gender}
          onChange={(obj) => addFilter('gender', obj)}
          value = { filters ?
            gender.filter(option => 
              option.value === filters.gender) : {}
          }
        />
        <Select
          className='select-nat' 
          placeholder='Nationality'
          isMulti
          value = { filters ?
            options.filter(option => 
              filteredNat.includes(option.value)
            ) : {}
          }
          options={options} onChange={(obj) => addFilter('nat', obj)} 
        />
        <button className='btn btn-success'
          onClick={onSearch}> Apply filters</button>
    </div>
  )
}

export default Search

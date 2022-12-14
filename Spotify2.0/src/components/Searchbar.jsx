import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {FiSearch} from 'react-icons/fi';
import { FaSearch } from "react-icons/fa";
const Searchbar = () => {
  const navigate=useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const handleSubmit=(e)=>{
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
  }
  return(
  <form onSubmit={handleSubmit} autoComplete="off" className="p-2 text-gray-400 focus-within:text-gray-600">
<label htmlFor="search-field" className="sr-only">
Search all songs
</label>
<div className="flex flex-row justify-start items-center">
<FaSearch className="w-5 h-5 ml-4"/>
<input value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value)}} 
id="search-field" type="text" placeholder="Search all songs" className="w-full bg-transparent outline-none text-sm font-medium ml-2"
autoComplete="off" type="search" name="search-field" id="search-field" placeholder="Search" className="flex-1 bg-transparent border-none outline-none placeholder-gray-500 text-base text-white p-4"/>

</div>
 
 
  </form>
)};

export default Searchbar;

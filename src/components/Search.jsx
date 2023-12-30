import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setPeople } from '../store/slices/people/peopleSlice';
import Badge from './Badge';
import { setBadge, setSearchTerm } from '../store/slices/search/searchSlice';

const Search = () => {

  const dispatch = useDispatch();

  const { people } = useSelector(state => state.people);
  const { badge, searchTerm } = useSelector(state => state.search);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const filteredPeople = people.filter((character) => {
      return character.name.toLowerCase().includes(searchTerm.toLowerCase())
    });
    
    if (filteredPeople.length > 0) {
      dispatch(setBadge({ badge: true }));
    } else {
      dispatch(setBadge({ badge: false }));
    };
    
    dispatch(setPeople({ people: filteredPeople }));
    // dispatch(setSearchTerm({ searchTerm: '' }));
  }

  const handleSearchChange = (event) => {
    setBadge(false);
    dispatch(setSearchTerm({ searchTerm: event.target.value }));
  };

  return (
    <>
      <form className={`${badge ? 'mb-2' : 'mb-10'} sticky top-0`} onSubmit={handleSearchSubmit} >   
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          </div>
          <input type="search" 
                id="default-search" 
                className="block w-full p-4 ps-10 text-md text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-dark-yellow-star-wars focus:border-dark-yellow-star-wars" 
                placeholder="Nombre, apellido..." 
                value={searchTerm}
                onChange={handleSearchChange}
                required />
          <button type="submit" className="text-black absolute end-2.5 bottom-2.5 bg-yellow-star-wars hover:bg-dark-yellow-star-wars focus:ring-4 focus:outline-none focus:ring-dark- yellow-star-wars font-medium rounded-lg text-sm px-4 py-2">Buscar</button>
        </div>
      </form>
      {badge ? <Badge /> : null}
    </>
  )
}

export default Search
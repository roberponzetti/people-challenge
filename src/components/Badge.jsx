import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setBadge } from '../store/slices/search/searchSlice';
import { setUpdatedPeople } from '../store/slices/people/peopleSlice';

const Badge = () => {

  const dispatch = useDispatch();

  const { people } = useSelector(state => state.people);
  const { searchTerm } = useSelector(state => state.search);

  const handleDeleteBadge = () => {
    dispatch(setBadge({ badge: false }));
    dispatch(setUpdatedPeople({ updatedPeople: people }));
  }

  return (
    <span id="badge-dismiss-yellow" className="inline-flex items-center px-2 py-1 me-2 mb-10 text-sm font-medium text-yellow-800 bg-yellow-100 rounded dark:bg-yellow-900 dark:text-yellow-300">
      {searchTerm}
      <button type="button" onClick={handleDeleteBadge} className="inline-flex items-center p-1 ms-2 text-sm text-yellow-400 bg-transparent rounded-sm hover:bg-yellow-200 hover:text-yellow-900 dark:hover:bg-yellow-800 dark:hover:text-yellow-300" data-dismiss-target="#badge-dismiss-yellow" aria-label="Remove">
        <svg className="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
        </svg>
        <span className="sr-only">Remove badge</span>
      </button>
    </span>
  )
}

export default Badge
import React, {useState} from 'react';

const SearchBar = ({onSearchSubmit}) => {
  const [searchKey,setSearchKey] = useState('')

  const onFormSubmit = (event) => {
    event.preventDefault();
    onSearchSubmit(searchKey);
  }

  return (
    <div className="ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label>Image Search</label>
          <input
            type="text"
            value={searchKey}
            onChange={event => setSearchKey(event.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
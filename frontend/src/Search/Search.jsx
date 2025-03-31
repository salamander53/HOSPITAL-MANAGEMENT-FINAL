function Search({ onSearchChange, searchData }) {
    // console.log('>>>check searchData', searchData);
    return (
        <>
            <input type="text" className="form-control w-50" placeholder="Search" onChange={(e) => onSearchChange(e.target.value)} />
            <i className="p-3 bi bi-search" style={{ fontSize: '2rem' }}></i>
        </>
    );
}

export default Search;
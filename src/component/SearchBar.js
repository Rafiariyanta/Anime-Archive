const SearchBar = ({ inputHandler }) => {
    return (
        <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input type="search" className="block p-4 pl-10 w-full text-sm rounded-lg border border-gray-30 bg-gray-700 text-white " placeholder="Search..." onChange={(e) => inputHandler(e)}/>
        </div>
    );
}

export default SearchBar;
import { useContext } from 'react';
import searchIcon from '../../assets/search.svg'
import { LocationContex } from '../../contex';
import { getLocationByName } from '../../data/cities';
import { useDebounce } from '../../hooks';
const Search = () => {
    const {setSelectedLocation} = useContext(LocationContex);

    const debounce = useDebounce((searchTerm)=>{
        console.log(searchTerm)
        const searchLocation = getLocationByName(searchTerm);
       console.log(searchLocation);
       setSelectedLocation(searchLocation);
    }, 500)

    const handleChange = (e) => {
      debounce(e.target.value);
    }

    
    return (
        <form action="#" >
            <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
                <input className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
                    type="search" placeholder="Search Location" required onChange={handleChange}/>
                <button type="submit">
                    <img src={searchIcon} alt='search'/>
                </button>
            </div>
        </form>
    );
};

export default Search;
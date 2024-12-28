import { useContext } from "react";
import { FavouriteContex, LocationContex } from "../../contex";

const FavouriteListModal = () => {
    const { favourite } = useContext(FavouriteContex);
    const {setSelectedLocation} = useContext(LocationContex);
    return (
        <div className="max-w-xs py-4 bg-white rounded-md border-gray-500 absolute right-0 top-16 text-black shadow-lg ">
            <h3 className="text-lg font-bold px-4">Favourite Locations</h3>
            <ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
                {favourite.length > 0 ? (favourite.map(fav => (<li className="hover:bg-gray-200" key={fav.location}>
                    <button href="" onClick={()=> setSelectedLocation({...fav})}>{fav.location}</button>
                </li>))) : (<p className="font-medium">No Favourite Location Added</p>)}

            </ul>
        </div>
    );
};

export default FavouriteListModal;
import { useContext, useEffect, useState } from 'react';
import heartIcon from '../../assets/heart.svg'
import redHeartIcon from '../../assets/heart-red.svg'
import { FavouriteContex, WeatherContex } from '../../contex';
const AddRemoveFavourite = () => {
    const { favourite, addToFav, removeFromFav } = useContext(FavouriteContex);

    const { weatherData: { location, latitude, longitude } } = useContext(WeatherContex);
    console.log(location);

    const [isFavourite, setIsFavourite] = useState(false);

   
    useEffect(() => {
        const found = favourite.find(fav => fav.location === location);
        setIsFavourite(found);
        
    }, [favourite, location])

    const handleFavourite = () => {
        setIsFavourite(!isFavourite)
        const found = favourite.find(fav => fav.location === location);
        if (!found) {
            addToFav(location, latitude, longitude)
        }
        else {
            removeFromFav(location)
        }


    }

    

    return (
        <div className="md:col-span-2">
            <div className="flex items-center justify-end space-x-6">
                <button className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]" onClick={handleFavourite}>
                    <span>{isFavourite ? "Remove from Favourite":"Add to Favourite"}</span>
                    <img src={isFavourite ? redHeartIcon : heartIcon} alt="" />
                </button>
            </div>
        </div>
    );
};

export default AddRemoveFavourite;
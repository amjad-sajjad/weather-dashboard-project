/* eslint-disable react/prop-types */
import { FavouriteContex } from "../contex"
import { useLocalStorage } from "../hooks"

const FavouriteProvider = ({children}) => {

    const [favourite,setFavourite] = useLocalStorage('favourites', []);

    const addToFav = (location,latitude,longitude) =>{
        setFavourite([
            ...favourite,
            {location,latitude,longitude}
        ])
    }
    const removeFromFav = (location) => {
        const restFav = favourite.filter(fav => fav.location !== location);
        setFavourite([
            ...restFav
        ]);
    }


    return (
        <FavouriteContex.Provider value={{favourite,setFavourite, addToFav, removeFromFav}}>
            {children}
        </FavouriteContex.Provider>
    )

}
export default FavouriteProvider;
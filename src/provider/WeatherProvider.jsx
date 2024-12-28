import { WeatherContex } from "../contex";
import { useFetchData } from "../hooks";

// eslint-disable-next-line react/prop-types
const WeatherProvider = ({ children }) => {
    const { weatherData, loading, error } = useFetchData();
    return (
        <WeatherContex.Provider value={{ weatherData, loading, error }}>
            {children}
        </WeatherContex.Provider>

    );
};

export default WeatherProvider;
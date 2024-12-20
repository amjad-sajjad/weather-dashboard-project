import { WeatherContex } from "../contex";
import { useFetchData } from "../hooks";

const WeatherProvider = ({ children }) => {
    const { weatherData, loading, error } = useFetchData();
    return (
        <WeatherContex.Provider value={{ weatherData, loading, error }}>
            {children}
        </WeatherContex.Provider>

    );
};

export default WeatherProvider;
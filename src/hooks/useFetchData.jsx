import { useEffect, useState } from "react";

const useFetchData = () => {
    const [weatherData, setWeatherData] = useState({
        location: "",
        latitude: "",
        longitude: "",
        climate: "",
        temperature: "",
        maxTemperature: "",
        minTemperature: "",
        humidity: "",
        cloudPercentage: "",
        wind: "",
        time: ""
    });
    const [loading, setLoading] = useState({
        state: "false",
        message: ""
    });
    const [error, setError] = useState(null);

    //function for data fetching....



    useEffect(() => {
        setLoading((prev) => ({
            ...prev,
            loading: true,
            message: "Finding Position..."

        }))

        const fetchData = async (latitude, longitude) => {
            console.log(latitude,longitude)
            try {
                //taking updater function to avoid unnecessary dependency here:
                setLoading((prev) => ({
                    ...prev,
                    state: true,
                    message: "Fetching Data ..."
                }));
                //fetch call here
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`);
                if (!response.ok) {
                    const error = `There is an error due to ${response.status}, Please try again...`;
                    throw new Error(error);
                }
                const data = await response.json();                
                //taking updater function to avoid unnecessary dependency here:
                setWeatherData((prev) => ({
                    ...prev,
                    location: data?.name,
                    latitude: data?.coord?.lat,
                    longitude: data?.coord?.lon,
                    climate: data?.weather[0]?.main,
                    temperature: data?.main?.temp,
                    maxTemperature: data?.main?.temp_max,
                    minTemperature: data?.main?.temp_min,
                    humidity: data?.main?.humidity,
                    cloudPercentage: data?.clouds?.all,
                    wind: data?.wind?.speed,
                    time: data?.dt
                }));

            }
            catch (err) {
                setError(err);

            }
            finally {
                setLoading((prev) => ({
                    ...prev,
                    state: false,
                    message: ""
                }))

            }
        };
        navigator.geolocation.getCurrentPosition((position) => {
            fetchData(position.coords.latitude, position.coords.longitude)
        })


    }, []);

    return {
        weatherData,
        loading,
        error
    }
};

export default useFetchData;
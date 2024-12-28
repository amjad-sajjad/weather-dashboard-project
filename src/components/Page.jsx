import { useContext, useEffect, useState } from 'react'
import Header from '../components/header/Header'
import WeatherBoard from '../components/weatherboard/WeatherBoard'

import rainImage from "../assets/backgrounds/rainy-day.jpg"
import clearImage from "../assets/backgrounds/clear-sky.jpg"
import cloudImage from "../assets/backgrounds/few-clouds.jpg"
import snowImage from "../assets/backgrounds/snow.jpg"
import sunnyImage from "../assets/backgrounds/sunny.jpg"
import thunderImage from "../assets/backgrounds/thunderstorm.jpg"
import winterImage from "../assets/backgrounds/winter.jpg"
import scatterCloudImage from "../assets/backgrounds/scattered-clouds.jpg"
import mistImage from "../assets/backgrounds/mist.jpeg"
import { WeatherContex } from '../contex'


const Page = () => {
    const [climateImage, setClimateImage] = useState('');
    const { weatherData: { climate }, loading } = useContext(WeatherContex);

    const getClimateImage = (climateName) => {
        switch (climateName) {
            case 'Rain':
                return rainImage;
            case "Clouds":
                return cloudImage;
            case "Clear":
                return clearImage;
            case "Snow":
                return snowImage;
            case "Thunder":
                return thunderImage;
            case "Fog":
                return winterImage;
            case "Haze":
                return scatterCloudImage;
            case "Mist":
                return mistImage;
            default:
                return sunnyImage;

        }

    }
    useEffect(() => {
        const climateImg = getClimateImage(climate);
        setClimateImage(climateImg)

    }, [climate])
    return (
        <>
            {
                loading.state ? (<p className='text-xl font-semibold'>{loading.message}</p>) : (
                    <div
                        style={{ backgroundImage: `url(${climateImage})` }}
                        className={`grid place-items-center h-screen bg-cover bg-no-repeat`}>
                        <Header />
                        <main className='mt-[100px]'>
                            <section>
                                <WeatherBoard />
                            </section>
                        </main>
                    </div>
                )
            }

        </>
    );
};

export default Page;
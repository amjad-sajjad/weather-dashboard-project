import './App.css'
import Page from './components/Page'
import FavouriteProvider from './provider/FavouriteProvider'
import LocationProvider from './provider/LocationProvider'
import WeatherProvider from './provider/WeatherProvider'
function App() {
 

  return (
    <LocationProvider>
      <WeatherProvider>
        <FavouriteProvider>
         <Page/>
        </FavouriteProvider>
      </WeatherProvider>
    </LocationProvider>
  )
}

export default App

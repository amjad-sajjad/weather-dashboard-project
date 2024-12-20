
import './App.css'
import Header from './components/header/Header'
import WeatherBoard from './components/weatherboard/WeatherBoard'
import WeatherProvider from './provider/WeatherProvider'

function App() {

  return (
    <WeatherProvider>
      <div className='grid place-items-center h-screen'>
      <Header/>
      <main>
        <section>
          <WeatherBoard/>
        </section>
      </main>
    </div>
    </WeatherProvider>
  )
}

export default App

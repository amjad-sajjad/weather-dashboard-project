const cities = [
    { location: "Dhaka", latitude: 23.8103, longitude: 90.4125 },
    { location: "New York", latitude: 40.7128, longitude: -74.006 },
    { location: "London", latitude: 51.5074, longitude: -0.1278 },
    { location: "Paris", latitude: 48.8566, longitude: 2.3522 },
    { location: "Tokyo", latitude: 35.6895, longitude: 139.6917 },
    { location: "Sydney", latitude: -33.8688, longitude: 151.2093 },
    { location: "Beijing", latitude: 39.9042, longitude: 116.4074 },
    { location: "Cairo", latitude: 30.0444, longitude: 31.2357 },
    { location: "Moscow", latitude: 55.7558, longitude: 37.6173 },
    { location: "Rio de Janeiro", latitude: -22.9068, longitude: -43.1729 },
    { location: "Los Angeles", latitude: 34.0522, longitude: -118.2437 },
    { location: "Berlin", latitude: 52.5200, longitude: 13.405 },
    { location: "Delhi", latitude: 28.6139, longitude: 77.209 },
    { location: "Mumbai", latitude: 19.076, longitude: 72.8777 },
    { location: "Istanbul", latitude: 41.0082, longitude: 28.9784 },
    { location: "Bangkok", latitude: 13.7563, longitude: 100.5018 },
    { location: "Singapore", latitude: 1.3521, longitude: 103.8198 },
    { location: "Toronto", latitude: 43.6511, longitude: -79.347 },
    { location: "Seoul", latitude: 37.5665, longitude: 126.978 },
    { location: "Buenos Aires", latitude: -34.6037, longitude: -58.3816 }
  ];
  

const getLocationByName = (searchTerm) => {
  
    const searchCity = cities.find(city => city.location.toLowerCase() === searchTerm.toLowerCase());
    if(!searchCity){
      return {
        location:"",
        latitude:0,
        longitude:0
      }
    }

return searchCity;

}
export {cities, getLocationByName};



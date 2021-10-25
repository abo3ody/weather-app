import { useEffect, useState } from "react";
import axios from "axios";
import { LocationBox, SearchBox, WeatherBox } from "./components";

const api_key = process.env.REACT_APP_API_KEY;
const base = "https://api.openweathermap.org/data/2.5/";

function App() {
   const [query, setQuery] = useState("moscow");
   const [weather, setWeather] = useState({});
   const [icon, setIcon] = useState("");
   const [error, setError] = useState(false);
   const [time, setTime] = useState("");

   const search = async (evt) => {
      if (evt.key === "Enter") {
         try {
            const response = await axios.get(
               `${base}weather?q=${query}&units=metric&APPID=${api_key}`
            );
            setWeather(response.data);
            setIcon(response.data.weather[0].icon);
            setError(false);

            if (
               response.data.dt >= response.data.sys.sunrise &&
               response.data.dt < response.data.sys.sunset
            ) {
               setTime("day");
            } else {
               setTime("night");
            }
         } catch (error) {
            console.log(error);
            setError(true);
         }
      }
   };

   useEffect(() => {
      try {
         axios
            .get(`${base}weather?q=moscow&units=metric&APPID=${api_key}`)
            .then((response) => {
               setQuery("");
               setWeather(response.data);
               setIcon(response.data.weather[0].icon);
               if (
                  response.data.dt >= response.data.sys.sunrise &&
                  response.data.dt < response.data.sys.sunset
               ) {
                  setTime("day");
               } else {
                  setTime("night");
               }
            });
      } catch (error) {
         console.log(error);
         setError(true);
      }
   }, []);
   useEffect(() => {
      const timer = setTimeout(() => {
         setError(false);
      }, 5000);
      return () => clearTimeout(timer);
   }, [query]);

   return (
      <div className={typeof (time !== "undefined") ? `app ${time}` : "app"}>
         <main>
            <SearchBox
               setQuery={setQuery}
               query={query}
               error={error}
               search={search}
            />
            <LocationBox weather={weather} />
            <WeatherBox weather={weather} icon={icon} />
         </main>
      </div>
   );
}

export default App;

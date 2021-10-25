import React from "react";
import styled from "styled-components";

function WeatherBox({ weather, icon }) {
   return (
      <Wrapper>
         {weather.main && (
            <div className="temp">{Math.round(weather.main.temp)}°c</div>
         )}
         {weather.main && (
            <>
               <div className="weather">{weather.weather[0].main}</div>
               <div className="weather_icon">
                  <img
                     src={` http://openweathermap.org/img/wn/${icon}@2x.png`}
                     alt="weather-icon"
                  />
               </div>
            </>
         )}
      </Wrapper>
   );
}

export default WeatherBox;

const Wrapper = styled.div`
   text-align: center;
   .temp {
      position: relative;
      display: inline-block;
      margin: 3rem auto;
      background-color: rgba(255, 255, 255, 0.2);
      border-radius: 1.6rem;
      padding: 1.5rem 2.5rem;
      color: #fff;
      font-size: 10.2rem;
      font-weight: 900;
      text-shadow: 0.3rem 0.6rem rgba(50, 50, 70, 0.5);
      text-align: center;
      box-shadow: 0.3rem 0.6rem rgba(0, 0, 0, 0.2);
   }
   .weather {
      color: #fff;
      font-size: 4.8rem;
      font-weight: 700;
      text-shadow: 0.3rem 0.3rem rgba(50, 50, 70, 0.5);
   }
   .weather_icon {
      position: relative;
      display: inline-block;
      margin: 3rem auto;
      background-color: rgba(255, 255, 255, 0.5);
      border-radius: 1.6rem;
      padding: 1rem;
      text-align: center;
      box-shadow: 0.3rem 0.6rem rgba(0, 0, 0, 0.2);
   }
   @media screen and (max-width: 812px) {
      .temp {
         margin: 2rem auto;
         padding: 1.5rem 2.5rem;
         font-size: 7rem;
      }
      .weather {
         font-size: 3.5rem;
      }
   }
`;

import React from "react";
import styled from "styled-components/macro";
import { dateBuilder } from "../utils/dateFormat";

function LocationBox({ weather }) {
   return (
      <Wrapper>
         {weather.main && (
            <div className="location">
               {`${weather.name}, ${weather.sys.country}`}
            </div>
         )}

         <div className="date">{dateBuilder(new Date())}</div>
      </Wrapper>
   );
}

export default LocationBox;

const Wrapper = styled.div`
   .location {
      color: #fff;
      font-size: 3rem;
      font-weight: 500;
      text-align: center;
      text-shadow: 0.3rem 0.3rem rgba(50, 50, 70, 0.5);
   }
   .date {
      color: #fff;
      font-size: 2rem;
      font-weight: 300;
      font-style: italic;
      text-align: center;
      text-shadow: 0.2rem 0.2rem rgba(50, 50, 70, 0.5);
   }
   @media screen and (max-width: 812px) {
      .location {
         font-size: 2rem;
      }
      .date {
         font-size: 1.5rem;
      }
   }
`;

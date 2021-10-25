import React from "react";
import styled from "styled-components/macro";

function SearchBox({ setQuery, query, error, search }) {
   return (
      <Wrapper>
         <input
            type="text"
            className="search_bar"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={search}
         />
         {error && <p className="error_msg">invalid input </p>}
      </Wrapper>
   );
}

export default SearchBox;

const Wrapper = styled.div`
   width: 100%;
   max-width: 800px;
   margin: 20px auto;

   .search_bar {
      display: block;
      width: 100%;
      padding: 15px;
      appearance: none;
      background: none;
      border: none;
      outline: none;
      background-color: rgba(255, 255, 255, 0.5);
      border-radius: 16px;
      /* margin-top: -25px; */
      box-shadow: 0 5px rgba(0, 0, 0, 0.2);

      color: #313131;
      font-size: 18px;
      transition: all 0.4s ease;
      &:focus {
         background-color: rgba(255, 255, 255, 0.75);
         box-shadow: 0 2px rgba(0, 0, 0, 0.2);
      }
   }

   .error_msg {
      color: red;
      background-color: rgba(255, 255, 255, 0.5);
      box-shadow: 0 3px rgba(0, 0, 0, 0.2);
      padding: 10px;
      border-radius: 16px;
      width: 12rem;
      margin-inline: auto;
      text-align: center;
      font-size: 18px;
      letter-spacing: 1px;
      margin-top: 8px;
   }
   @media screen and (max-width: 812px) {
      .search_bar {
         padding: 10px;
         font-size: 13px;
      }
   }
`;

import React, { useEffect, useState } from 'react';
import CountryCard from './Countrycard';
import { ShimmerSimpleGallery } from "react-shimmer-effects";

export default function CountriesList({ query }) {
  const [countriesData, setCountriesData] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => setCountriesData(data))
      .catch((error) => console.error('Error fetching countries:', error));
  }, []);

  // Show shimmer loader while data is still loading
  if (countriesData.length === 0) {
    return (
      <>
        <ShimmerSimpleGallery 
  card
  row={2} 
  col={4} 
  gap={15}               
  imageType="thumbnail"  
  imageHeight={333} 
  

/>

      </>
    );
  }

  // Once data is loaded, show the country cards
  return (
    <>
      <div className="countries-container">
        {countriesData
          .filter((country) =>
            country.name.common.toLowerCase().includes(query) || country.region.toLowerCase().includes(query)
          )
          .map((country) => (
            <CountryCard
              key={country.name.common}
              name={country.name.common}
              flag={country.flags.svg}
              population={country.population}
              region={country.region}
              capital={country.capital?.[0]}
              data={country}
            />
          ))}
      </div>
    </>
  );
}

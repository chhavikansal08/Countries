import React, { useState } from 'react'
import SearchBar from './SearchBar'
import SelectMenu from './SelectMenu'
import CountriesList from './CountriesList'

function Home() {
   const [query, setQuery] = useState('')
  return (
    <main>
    <div className="search-filter-container">
      <SearchBar setQuery={setQuery} />
      <SelectMenu setQuery={setQuery}/>
    </div>
    <CountriesList query={query} />
  </main>
  )
}

export default Home
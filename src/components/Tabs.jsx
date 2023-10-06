import React from 'react'
import { useState } from 'react';
import Upcoming from './Upcoming';
import Byteams from './Byteams';
import Results from './Results';

const UPCOMING = 'upcoming';
// TODO use constants for page names/keys
// TODO lower case strings plz
// TODO abstract the tab <li> into ts own component <Tab name={UPCOMING}>Upcoming</Tab>
// TODO better component styles (cursor, layout, selection)
// TODO refactor Fixture component

function Options(){
    const [currentPage, setCurrentPage] = useState('Upcoming');

    const renderPage = () => {
        switch (currentPage) {
          case 'Upcoming':
            return <Upcoming/>;
          case 'Byteams':
            return <Byteams/>;
          case 'Results':
            return <Results/>;
          default:
            return <Upcoming/>;
        }
      };

return(
    <div className="Tabs" style={{}}>
     <nav>
        <ul>
          <li>
            <div onClick={() => setCurrentPage('Byteams')}><h2>By Teams</h2></div>
          </li>
          <li>
          <div onClick={() => setCurrentPage('Upcoming')}><h2>Upcoming</h2></div>
          </li>
          <li>
          <div onClick={() => setCurrentPage('Results')}><h2>Results</h2></div>
          </li>
        </ul>
      </nav>
      {renderPage()}
    </div>
)

}
export default Options
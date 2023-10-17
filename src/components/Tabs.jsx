import React from 'react';
import { useState } from 'react';
import Upcoming from './Upcoming';
import Byteams from './Byteams';
import Results from './Results';
import TabList from './TabList';
// import TabsList from './Tabslist'

const UPCOMING = 'upcoming';
// TODO use constants for page names/keys
// TODO lower case strings plz
// TODO abstract the tab <li> into ts own component <Tab name={UPCOMING}>Upcoming</Tab>
// TODO better component styles (cursor, layout, selection)

function Options() {
  const [currentPage, setCurrentPage] = useState('Upcoming');

  const renderPage = () => {
    switch (currentPage) {
      case 'Upcoming':
        return <Upcoming />;
      case 'Byteams':
        return <Byteams />;
      case 'Results':
        return <Results />;
      default:
        return <Upcoming />;
    }
  };

  return (
    <TabList
      setCurrentPage={setCurrentPage}
      renderPage={renderPage}
    />
  );
}
export default Options;

import React from 'react';

function TabList({ renderPage, setCurrentPage }) {
  return (
    <div className="Tabs" style={{}}>
      <nav>
        <ul className="Tab">
          <li className="TabList">
            <div onClick={() => setCurrentPage('Byteams')}>
              <h2>By Teams</h2>
            </div>
          </li>
          <li className="TabList">
            <div onClick={() => setCurrentPage('Upcoming')}>
              <h2>Upcoming</h2>
            </div>
          </li>
          <li className="TabList">
            <div onClick={() => setCurrentPage('Results')}>
              <h2>Results</h2>
            </div>
          </li>
        </ul>
      </nav>
      {renderPage()}
    </div>
  );
}
export default TabList;

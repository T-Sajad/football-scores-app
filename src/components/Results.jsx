import fixturedata from '../../data/get-fixtures-en.json'
import {useState} from 'react'
console.log(fixturedata)
import { startOfDay, subDays, endOfDay } from 'date-fns'

function Results() {
  const fixture = fixturedata.response
  //const [filteredUsers, setFilteredUsers] = useState(fixture)
  const [filteredUsers, setFilteredUsers] = useState(filterSevenDays(fixture))

  // TODO this is also a candidate for unit testing!
  function filterSevenDays(fixtureData) {
      const todaysdate = new Date ()
      // https://date-fns.org/v2.30.0/docs/addDays
      const startDate = startOfDay(todaysdate)
      const endDate = endOfDay(subDays(todaysdate,6))
      console.log(`filtering between ${startDate.toISOString()} and ${endDate.toISOString()}`)
      return fixtureData.filter((fixtureData)=>{
        const { fixture } = fixtureData;
        const gameday = new Date(fixture.date)
        if(gameday >= endDate && gameday <= startDate ) {
          return fixture    
        }
    })
  }

  return (
    <div>
      <div>
        {filteredUsers.map((fixture, i) => (
          <div key={i}>
            <h3>{`${fixture.teams.home.name}`}
              <img width='75pxpx' height='75px'src={fixture.teams.home.logo}/>
              {`${fixture.score.fulltime.home}-${fixture.score.fulltime.away}`}
              <img  width='75pxpx' height='75px' src={fixture.teams.away.logo}/>
              {`${fixture.teams.away.name}`}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Results
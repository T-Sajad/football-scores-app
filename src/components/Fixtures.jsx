import fixturedata from '../../data/get-fixtures-en.json'
import {useState} from 'react'
console.log(fixturedata)

function Versus() {
  const fixture = fixturedata.response

  const todaysdate = new Date ()
  console.log(todaysdate)


  const [searchItem, setSearchItem] = useState('')
  const [filteredUsers, setFilteredUsers] = useState(fixture)

  const handleInputChange = (e) => { 
    const searchTerm = e.target.value;
    setSearchItem(searchTerm)

    const filteredItems = fixture.filter((fixtures) =>
    fixtures.teams.home.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    fixtures.teams.away.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredUsers(filteredItems);
  }



  
  return (
    <div>
        <input 
        type="text"
        value={searchItem}
        onChange={handleInputChange}
        placeholder='Type to search'
 />
      <div>
        {filteredUsers.map((fixture, i) => (
          <div key={i}>
            <h3>{`${fixture.teams.home.name}`} <img src={fixture.teams.home.logo}/> {`${fixture.score.fulltime.home}-${fixture.score.fulltime.away}`} <img src={fixture.teams.away.logo}/> {`${fixture.teams.away.name}`}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Versus;

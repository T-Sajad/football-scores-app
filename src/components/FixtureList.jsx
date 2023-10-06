import React from 'react'
import Fixture  from './Fixture';

function FixtureList({ fixtures  }){
  console.log(fixtures)
  return fixtures.map((fixture)=> (
       <Fixture fixture={fixture} />
    )     
  );
}
export default FixtureList